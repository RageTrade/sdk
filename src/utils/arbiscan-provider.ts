import { ethers, logger } from 'ethers';
import { Logger } from 'ethers/lib/utils';
import { chainIds, NetworkName } from '../contracts';

export class ArbiscanProvider extends ethers.providers.EtherscanProvider {
  constructor(network: NetworkName, apiKey?: string) {
    super({ name: network, chainId: chainIds[network] }, apiKey);
  }

  getBaseUrl(): string {
    switch (this.network ? this.network.name : 'invalid') {
      case 'arbmain':
        return 'https://api.arbiscan.io';
      case 'arbtest':
      case 'arbrinkeby':
        return 'https://api-testnet.arbiscan.io';
      case 'arbgoerli':
        return 'https://api-goerli.arbiscan.io';
      default:
    }
    return logger.throwArgumentError(
      'unsupported network',
      'network',
      this.network.name
    );
  }

  async perform(method: string, params: any): Promise<any> {
    switch (method) {
      case 'getLogs': {
        const args: Record<string, any> = { action: 'getLogs' };

        if (params.filter.fromBlock) {
          args.fromBlock = checkLogTag(params.filter.fromBlock);
        }

        if (params.filter.toBlock) {
          args.toBlock = checkLogTag(params.filter.toBlock);
        }

        if (params.filter.address) {
          args.address = params.filter.address;
        }

        // @TODO: We can handle slightly more complicated logs using the logs API
        if (params.filter.topics && params.filter.topics.length > 0) {
          const topic0 = params.filter.topics[0];
          const topic1 = params.filter.topics[1];
          const topic2 = params.filter.topics[2];
          const topic3 = params.filter.topics[3];
          if (topic0 !== undefined) {
            if (typeof topic0 !== 'string' || topic0.length !== 66) {
              logger.throwError(
                'unsupported topic format',
                Logger.errors.UNSUPPORTED_OPERATION,
                { topic0 }
              );
            }
            args.topic0 = topic0;
          }
          if (topic1 !== undefined) {
            if (typeof topic1 !== 'string' || topic1.length !== 66) {
              logger.throwError(
                'unsupported topic format',
                Logger.errors.UNSUPPORTED_OPERATION,
                { topic1 }
              );
            }
            args.topic1 = topic1;
          }
          if (topic2 !== undefined) {
            if (typeof topic2 !== 'string' || topic2.length !== 66) {
              logger.throwError(
                'unsupported topic format',
                Logger.errors.UNSUPPORTED_OPERATION,
                { topic2 }
              );
            }
            args.topic2 = topic2;
          }
          if (topic3 !== undefined) {
            if (typeof topic3 !== 'string' || topic3.length !== 66) {
              logger.throwError(
                'unsupported topic format',
                Logger.errors.UNSUPPORTED_OPERATION,
                { topic3 }
              );
            }
            args.topic3 = topic3;
          }
        }

        const logs: Array<any> = await this.fetch('logs', args);

        // Cache txHash => blockHash
        let blocks: { [tag: string]: string } = {};

        // Add any missing blockHash to the logs
        for (let i = 0; i < logs.length; i++) {
          const log = logs[i];
          if (log.blockHash != null) {
            continue;
          }
          if (blocks[log.blockNumber] == null) {
            // This is commented to prevent unnecessary queries for block hash.
            // const block = await this.getBlock(log.blockNumber);
            // if (block) {
            // blocks[log.blockNumber] = block.hash;
            blocks[log.blockNumber] = ethers.constants.HashZero;
            // }
          }
          log.blockHash = blocks[log.blockNumber];
        }

        return logs;
      }
      default:
        return await super.perform(method, params);
    }
  }
}

// The blockTag was normalized as a string by the Provider pre-perform operations
function checkLogTag(blockTag: string): number | 'latest' {
  if (blockTag === 'pending') {
    throw new Error('pending not supported');
  }
  if (blockTag === 'latest') {
    return blockTag;
  }

  return parseInt(blockTag.substring(2), 16);
}
