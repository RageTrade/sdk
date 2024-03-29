/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../common';

export declare namespace NFTDescriptor {
  export type ConstructTokenURIParamsStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    quoteTokenAddress: PromiseOrValue<string>;
    baseTokenAddress: PromiseOrValue<string>;
    quoteTokenSymbol: PromiseOrValue<string>;
    baseTokenSymbol: PromiseOrValue<string>;
    quoteTokenDecimals: PromiseOrValue<BigNumberish>;
    baseTokenDecimals: PromiseOrValue<BigNumberish>;
    flipRatio: PromiseOrValue<boolean>;
    tickLower: PromiseOrValue<BigNumberish>;
    tickUpper: PromiseOrValue<BigNumberish>;
    tickCurrent: PromiseOrValue<BigNumberish>;
    tickSpacing: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    poolAddress: PromiseOrValue<string>;
  };

  export type ConstructTokenURIParamsStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    number,
    number,
    boolean,
    number,
    number,
    number,
    number,
    number,
    string
  ] & {
    tokenId: BigNumber;
    quoteTokenAddress: string;
    baseTokenAddress: string;
    quoteTokenSymbol: string;
    baseTokenSymbol: string;
    quoteTokenDecimals: number;
    baseTokenDecimals: number;
    flipRatio: boolean;
    tickLower: number;
    tickUpper: number;
    tickCurrent: number;
    tickSpacing: number;
    fee: number;
    poolAddress: string;
  };
}

export interface NFTDescriptorInterface extends utils.Interface {
  functions: {
    'constructTokenURI((uint256,address,address,string,string,uint8,uint8,bool,int24,int24,int24,int24,uint24,address))': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'constructTokenURI'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'constructTokenURI',
    values: [NFTDescriptor.ConstructTokenURIParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: 'constructTokenURI',
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTDescriptor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTDescriptorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    constructTokenURI(
      params: NFTDescriptor.ConstructTokenURIParamsStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  constructTokenURI(
    params: NFTDescriptor.ConstructTokenURIParamsStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    constructTokenURI(
      params: NFTDescriptor.ConstructTokenURIParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    constructTokenURI(
      params: NFTDescriptor.ConstructTokenURIParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    constructTokenURI(
      params: NFTDescriptor.ConstructTokenURIParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
