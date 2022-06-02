import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

const KLAYTON_API_KEY = process.env.KLAYTON_API_KEY || "hello";
const KLAYTON_PRIVATE_KEY = process.env.KLAYTON_PRIVATE_KEY || "hello";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.7", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [RINKEBY_PRIVATE_KEY],
    // },

    // Goerli testnet config by Ammar
    klayton: {
      url: `https://api.baobab.klaytn.net:8651`,
      accounts: [KLAYTON_PRIVATE_KEY],
    }, 
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: ETHERSCAN_API_KEY,
  // },
};

export default config;
