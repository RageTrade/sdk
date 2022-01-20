const {
  readdirSync,
  removeSync,
  lstatSync,
  readJsonSync,
  writeJsonSync,
} = require('fs-extra');
const path = require('path');

async function main() {
  await forAllFilesInThis(path.resolve(__dirname, 'deployments'));
}

async function forAllFilesInThis(currentDirPath) {
  const dirs = readdirSync(currentDirPath);
  dirs.forEach((childDirName) => {
    const childPath = path.resolve(currentDirPath, childDirName);
    if (childDirName === 'solcInputs') {
      removeSync(childPath);
      return;
    }
    if (childDirName === '.chainId') {
      removeSync(childPath);
      return;
    }

    if (lstatSync(childPath).isDirectory()) {
      forAllFilesInThis(childPath);
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

main().catch(console.error);
