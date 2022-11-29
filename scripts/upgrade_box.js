// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat")

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    console.log("Upgrading Box...")
    const boxv2 = await upgrades.upgradeProxy(
        "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        BoxV2
    )
    console.log("Box upgraded")
    console.log(`\naddress --> ${boxv2.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
