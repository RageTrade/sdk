const {
  readdirSync,
  removeSync,
  lstatSync,
  readJsonSync,
  writeJsonSync,
} = require('fs-extra');
const _path = require('path');

async function main() {
  await forAllFilesInThis(_path.resolve(__dirname, 'deployments'));

  await copyAccountEventsErrorsToClearingHouse();
}

async function forAllFilesInThis(currentDirPath) {
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

function copyAccountEventsErrorsToClearingHouse() {
  const AccountLibraryData = readJsonSync(
    _path.resolve(__dirname, 'deployments', 'arbtest', 'AccountLibrary.json')
  );
  const ClearingHouseData = readJsonSync(
    _path.resolve(__dirname, 'deployments', 'arbtest', 'ClearingHouse.json')
  );
  for (const accAbiEl of AccountLibraryData.abi) {
    if (['error', 'event'].includes(accAbiEl.type)) {
      if (
        !ClearingHouseData.abi.find(
          (chAbiEL) =>
            chAbiEL.type + '-' + chAbiEL.name ===
            accAbiEl.type + '-' + accAbiEl.name
        )
      ) {
        console.log(accAbiEl.name);
        ClearingHouseData.abi.push(accAbiEl);
      }
    }
  }

  writeJsonSync(
    _path.resolve(__dirname, 'deployments', 'arbtest', 'ClearingHouse.json'),
    ClearingHouseData,
    {
      spaces: 2,
    }
  );
}

main().catch(console.error);
