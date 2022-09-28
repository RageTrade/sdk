const {
  readdirSync,
  removeSync,
  lstatSync,
  readJsonSync,
  writeJsonSync,
} = require('fs-extra');
const _path = require('path');

async function main() {
  const deploymentsDirPath = _path.resolve(__dirname, 'src', 'deployments');
  removeMetadataFromDir(deploymentsDirPath);
}

main().catch(console.error);

function removeMetadataFromDir(currentDirPath) {
  const dirs = readdirSync(currentDirPath);
  dirs.forEach((childDirName) => {
    const childPath = _path.resolve(currentDirPath, childDirName);
    if (childDirName === 'solcInputs') {
      removeSync(childPath);
      return;
    }
    // if (childDirName === '.chainId') {
    //   removeSync(childPath);
    //   return;
    // }

    if (lstatSync(childPath).isDirectory()) {
      removeMetadataFromDir(childPath);
    } else {
      removeMetadataFromFile(childPath);
    }
  });
}

function removeMetadataFromFile(path) {
  const data = readJsonSync(path);
  // only keep address, get rid of all other things, to reduce package size
  const receipt = data?.receipt;
  const newData = {
    address: data.address,
  };
  if (receipt !== undefined) {
    newData.receipt = {
      blockNumber: receipt.blockNumber,
      transactionHash: receipt.transactionHash,
    };
  }
  writeJsonSync(path, newData, { spaces: 2 });
}
