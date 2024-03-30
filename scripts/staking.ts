const stik = require('hardhat');

async function stook() {
    const Staking = await stik.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy('0xB6DC5CDd677655AFb9A726B45dab8f3F6EA1F78C', '0x7D231931557E9E402Edc5b46f6cEC9Bdc3C12A19');
    // No need to call deployed()

    console.log("Staking deployed at:", staking.target);
}

stook().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//0x5fa792AaEe4fff0023777Df99B760EfC11e1b1aB