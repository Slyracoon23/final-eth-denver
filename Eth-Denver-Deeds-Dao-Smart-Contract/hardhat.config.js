const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ganache");

const INFURA_URL = "https://rinkeby.infura.io/v3/99455bdc77394de7a414ba7f0faaf2fe"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("whitelist", "Whitelists address")
    .addParam("address", "The address to whitelist")
    .addParam("id", "The token id to whitelist")
    .setAction(async (taskArgs) => {
      // Create the contract instance
      const DeedsERC721 = await ethers.getContractFactory("DeedsERC721");
      const deedsERC721 = await DeedsERC721.attach("0x092C3468De5F4c36902380EA72A29953abe3Cd89");

      // Whitelist
      await deedsERC721.setAllowAddr(taskArgs.address, taskArgs.id);

    });

    task("check_whitelist", "Whitelists address")
    .addParam("address", "The address")
    .setAction(async (taskArgs) => {
      // Create the contract instance
      const DeedsERC721 = await ethers.getContractFactory("DeedsERC721");
      const deedsERC721 = await DeedsERC721.attach("0x092C3468De5F4c36902380EA72A29953abe3Cd89");

      // Whitelist
      console.log(await deedsERC721._allowList(taskArgs.address));

    });


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // defaultNetwork: "ganache",
  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  networks: {
    localhost: {
      chainId: 31337, // Chain ID should match the hardhat network's chainid
      accounts: [`0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e`],
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      // accounts: [process.env.PRIVATE_KEY]
    },
    rinkeby: {
      url: INFURA_URL,
      accounts: ['0f199770758b2c8d83a2b44c47a2732e1a7ae7f357cf021c358774eddd0d96f1'],
      timeout: 60000

    }
  },
  //   goerli: {
  //     url: process.env.INFURA,
  //     accounts: [process.env.PRIVATE_KEY],
  //     gas: 2100000,
  //     gasPrice: 8000000000
  //   }
  // },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY
  // }
};

