const { ethers, upgrades } = require("hardhat");
require("dotenv").config();



async function main() {
    const ownerWallet = new ethers.Wallet(process.env.PRIVATE_KEY3, ethers.provider);
    

    const Rand = await ethers.getContractFactory("CryptoZombie");
    const rd = await Rand.attach("0xBc19b84C655783f5b37CB4e623d9c4F501C5D6C6");
    
    const rdOwner = await rd.connect(ownerWallet);
    console.log(ownerWallet.address);

    
      // tạo 1 zombie mới
      //const tx = await rdOwner.createRandomZombie("miyuki")
      //const tx = await rdOwner.transferFrom(ownerWallet.address, 0xe0A389278dA5E0dAC3ADaa1C619e56c409C563B9, 0); chuyen tu tai khoan A sang B
      //const tx = await rdOwner.approve("0xe0A389278dA5E0dAC3ADaa1C619e56c409C563B9", 0); cap quyen cho B
      //const tx = await rdOwner.transferFrom("0xe0A389278dA5E0dAC3ADaa1C619e56c409C563B9","0x7ceEb0999Dc11412aC0ed78b30d0435A91593593", 2);
      
      //console.log(await tx);
      const tx = await rdOwner.levelUp(0, { value: "1000000000000000"}); // level up
      console.log(tx);
      
}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })