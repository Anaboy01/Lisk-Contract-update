const rew = require('hardhat');

async function rewad() {
    const RewardToken = await rew.ethers.getContractFactory("RewardToken");
    const rewardToken = await RewardToken.deploy(10000000);
    // No need to call deployed()

    console.log("RewardToken deployed at:", rewardToken.target);
}

rewad().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//0x7D231931557E9E402Edc5b46f6cEC9Bdc3C12A19


