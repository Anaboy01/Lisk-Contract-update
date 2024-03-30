const hre = require('hardhat');

async function main() {
    const StakeToken = await hre.ethers.getContractFactory("StakeToken");
    const stakeToken = await StakeToken.deploy(1000);
    // No need to call deployed()

    console.log("StakeToken deployed at:", stakeToken.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


//0xB6DC5CDd677655AFb9A726B45dab8f3F6EA1F78C
