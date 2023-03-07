#!/bin/bash
if [ -d node_modules/$PACKAGE/deployments ] 
then 
rm -rf src/deployments/$REPO
mkdir -p src/deployments/$REPO
cp -rf node_modules/$PACKAGE/deployments/ src/deployments/$REPO 
fi

rm -rf src/typechain/$REPO
typechain --target ethers-v6 --out-dir src/typechain/$REPO './node_modules/'$PACKAGE'/artifacts/**/*.sol/!(*.dbg.json)'