const { ethers } = require("hardhat");
const { sideOwner } = require("./rdOwner");
const { ProviderWrapper } = require("hardhat/plugins");
require("dotenv").config()


const main = async () =>  {
// Kết nối tới mạng blockchain (ví dụ: Ethereum)
  

  const Miyuki = await ethers.getSigners(process.env.Contract_Address);
  
  console.log(Miyuki);

  
}
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
