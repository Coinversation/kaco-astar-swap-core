// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PancakePair = await ethers.getContractFactory("PancakePair");
  const pair = await PancakePair.attach("0xe2c19eb0f91c80275cc254f90ed0f18f26650ec5");

  const result = await pair.getReserves();

  //Shibuya: 0x0558677b74f6dc11ee476ed79ce993579e32b1ae87e818f42c4f9d829c1db12a
  //Shiden: 0x0558677b74f6dc11ee476ed79ce993579e32b1ae87e818f42c4f9d829c1db12a
  console.log(`pair, reserve0: ${result._reserve0.toString()}, reserve1: ${result._reserve1.toString()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
