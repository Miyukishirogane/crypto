require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const INFURA_URL =
  "https://mainnet.infura.io/v3/9eb2dda75bb54f9d8a09c87ddfd76765";
const KOVAN_URL = "https://kovan.infura.io/v3/ba63b223746842d89619ef053b179319";
const GOERLI =
  "https://goerli.infura.io/v3/ba63b223746842d89619ef053b179319";
  const PRIVATE_KEY4 = process.env.PRIVATE_KEY4;
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "bscTestnet",
  networks: {
    bscTestnet: {
      url: "https://fantom-testnet.publicnode.com",
      chainId: 4002,
      accounts: [`0x${process.env.PRIVATE_KEY4}`],
      //gas:2e5,
      // gasPrice:2e7,
    },
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    kovan: {
      url: KOVAN_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    goerli: {
      url: GOERLI,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
