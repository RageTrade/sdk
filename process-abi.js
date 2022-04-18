const { existsSync } = require('fs');
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
  delete data.metadata;
  delete data.devdoc;
  writeJsonSync(path, data, {
    spaces: 2,
  });
}
