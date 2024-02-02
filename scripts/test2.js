const { ethers, upgrades } = require("hardhat");
require("dotenv").config();



async function main() {
    const ownerWallet = new ethers.Wallet(process.env.PRIVATE_KEY4, ethers.provider);
    

    const Rand = await ethers.getContractFactory("CryptoZombie");
    //const rd = await Rand.attach("0xBc19b84C655783f5b37CB4e623d9c4F501C5D6C6");0x79587afB60ACeddDee8371D7E80265c867c9811d
    const rd = await Rand.attach("0x79587afB60ACeddDee8371D7E80265c867c9811d")
    const rdOwner = await rd.connect(ownerWallet);
    console.log(ownerWallet.address);

    
      // tạo 1 zombie mới
      //const tx = await rdOwner.createRandomZombie("miyuki")
//       const tx = await rdOwner.zombies(0); // kiem tra zombie so huu
//       console.log(await tx);
// 
const tx = await rdOwner.levelUp(0, { value: ethers.utils.parseEther("0.001") });
}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })