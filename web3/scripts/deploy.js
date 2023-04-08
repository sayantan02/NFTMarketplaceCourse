const hre = require('hardhat');
const main = async () => {

// Here you will have to name the entering file of smart contracts

// e.g. My Solidity file name is Transactions.sol and in that file my contract name is also Transactions so I am mentioning Transactions in getContractFactory("Transactions")

// WARNING: File name and contract name should be same.

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy("CodeLek Technology", "CLT", 10);

  await nftMarketplace.deployed();

  console.log(`Smart Contracts Deployed to: ${nftMarketplace.address}`
  );
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
