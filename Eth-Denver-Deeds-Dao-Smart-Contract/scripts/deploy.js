const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const DeedsERC721 = await ethers.getContractFactory("DeedsERC721");
    const deedsERC721 = await DeedsERC721.deploy();

    console.log(`DeedsERC721 deployed to: ${deedsERC721.address}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });