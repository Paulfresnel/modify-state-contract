const hre = require('hardhat');
const ethers = require('ethers');
require("dotenv").config();

async function main(){

    const url = process.env.ALCHEMY_URL;
    
    let artifacts = await hre.artifacts.readArtifact('ModifyVariable');

    let privateKey = process.env.PRIVATE_KEY;

    let provider = new ethers.providers.JsonRpcProvider(url);

    let wallet = new ethers.Wallet(privateKey, provider);

    let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

    let contract = await factory.deploy(15, 5);
    await contract.deployed();
    console.log("contract address:", contract.address);
    console.log("contract state variables - x:",await contract.x(), "string:",await contract.secretString(), "y:",await contract.y())

   let difference = await contract.differenceWith(12);
    console.log("difference:", difference);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});