require("@nomiclabs/hardhat-ethers");
require("dotenv").config();


module.exports = {
  solidity: "0.8.4",
  networks:{
    sepolia:{
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  }
};