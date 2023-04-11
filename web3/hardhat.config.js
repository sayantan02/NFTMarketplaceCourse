require('@nomiclabs/hardhat-waffle');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/XWMQCicUV3TvpDl7xcm1XwA2FOE4tFvm", // Paste the HTTPS url here
      accounts : ['b92c9b04407a7c66a4ffce97bf4803d10dd57d144fde2a1fae54993cd0225754'] // This is the account Private Key, Details Described Below
    },
  },
};

// 0x1673F505A55eEB6F471806efa400B86a27fCD0D0