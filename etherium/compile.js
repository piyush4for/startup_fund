//build new compiler so that it doesn't had to run again it will use build folder
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output) {
    fs.outputJSONSync(
        //worst os windows even it cant handle special characters in filename so in this case ":" character
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}