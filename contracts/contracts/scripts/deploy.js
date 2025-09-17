const hre = require("hardhat");

async function main() {
  const Factory = await hre.ethers.getContractFactory("SimpleCryptoKitties");
  const sck = await Factory.deploy();
  await sck.deployed();
  console.log("SimpleCryptoKitties deployed to:", sck.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
