const {
  readdirSync,
  removeSync,
  lstatSync,
  readJsonSync,
  writeJsonSync,
} = require('fs-extra');
const _path = require('path');

async function main() {
  const deploymentsDirPath = _path.resolve(__dirname, 'deployments');
  removeMetadataFromDir(deploymentsDirPath);

  copyAccountEventsErrorsToClearingHouse(deploymentsDirPath);
}

function removeMetadataFromDir(currentDirPath) {
  const dirs = readdirSync(currentDirPath);
  dirs.forEach((childDirName) => {
    const childPath = _path.resolve(currentDirPath, childDirName);
    if (childDirName === 'solcInputs') {
      removeSync(childPath);
      return;
    }
    if (childDirName === '.chainId') {
      removeSync(childPath);
      return;
    }

    if (lstatSync(childPath).isDirectory()) {
      removeMetadataFromDir(childPath);
    } else {
      removeMetadataFromFile(childPath);
    }
  });
}

function removeMetadataFromFile(path) {
  const data = readJsonSync(path);
  delete data.metadata;
  delete data.devdoc;
  writeJsonSync(path, data, {
    spaces: 2,
  });
}

function copyAccountEventsErrorsToClearingHouse(deploymentsDirPath, fn) {
  const dirs = readdirSync(deploymentsDirPath);
  dirs.forEach((childDirName) => {
    const childDeploymentPath = _path.resolve(deploymentsDirPath, childDirName);
    if (lstatSync(childDeploymentPath).isDirectory()) {
      // Including events of Account Library in Clearing House
      const ClearingHouseData = readJsonSync(
        _path.resolve(childDeploymentPath, 'ClearingHouse.json')
      );
      const AccountLibraryData = readJsonSync(
        _path.resolve(childDeploymentPath, 'AccountLibrary.json')
      );
      pushAbi(ClearingHouseData, AccountLibraryData);

      // Including events of FundingPayment Library in PoolWrapper
      const VPoolWrapperData = readJsonSync(
        _path.resolve(childDeploymentPath, 'VPoolWrapperLogic.json')
      );
      pushAbi(ClearingHouseData, {
        abi: [
          {
            anonymous: false,
            inputs: [
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'sumAX128',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'sumBX128',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'sumFpX128',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint48',
                    name: 'timestampLast',
                    type: 'uint48',
                  },
                ],
                indexed: false,
                internalType: 'struct FundingPayment.Info',
                name: 'fundingPayment',
                type: 'tuple',
              },
              {
                indexed: false,
                internalType: 'int256',
                name: 'fundingRateX128',
                type: 'int256',
              },
              {
                indexed: false,
                internalType: 'uint256',
                name: 'virtualPriceX128',
                type: 'uint256',
              },
            ],
            name: 'FundingPaymentStateUpdated',
            type: 'event',
          },
        ],
      });

      writeJsonSync(
        _path.resolve(childDeploymentPath, 'ClearingHouse.json'),
        ClearingHouseData,
        { spaces: 2 }
      );
    }
  });
}

function pushAbi(mainContractDataMutable, otherContractDataRead) {
  for (const ocAbiEl of otherContractDataRead.abi) {
    if (['error', 'event'].includes(ocAbiEl.type)) {
      if (
        !mainContractDataMutable.abi.find(
          (mcAbiEL) =>
            mcAbiEL.type + '-' + mcAbiEL.name ===
            ocAbiEl.type + '-' + ocAbiEl.name
        )
      ) {
        console.log(ocAbiEl.name);
        mainContractDataMutable.abi.push(ocAbiEl);
      }
    }
  }
}

main().catch(console.error);
