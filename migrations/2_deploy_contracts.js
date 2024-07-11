const CaptureTheFlag = artifacts.require("CaptureTheFlag");
const WhitelistPaymaster = artifacts.require("WhitelistPaymaster");

module.exports = async function (deployer, network, accounts) {
  const forwarder = require("../build/gsn/Forwarder").address;
  const whiteListAddress = require("../config.json").whiteListAddress;
  await deployer.deploy(CaptureTheFlag, forwarder);

  console.log(
    `Deployed CTF at ${CaptureTheFlag.address} with forwarder ${forwarder}`
  );

  await deployer.deploy(WhitelistPaymaster);
  const relayHubAddress = require("../build/gsn/RelayHub.json").address;
  const paymaster = await WhitelistPaymaster.deployed();
  await paymaster.setRelayHub(relayHubAddress);
  await paymaster.setTrustedForwarder(forwarder);

  // This is the first ganache address, when started with "ganache-cli -d"
  // you can add your metamask address here.
  await paymaster.whitelistSender(whiteListAddress?.[0], true);

  // //you can also add addresses by running `truffle console` and then running:
  // const pm = await WhitelistPaymaster.deployed();
  // pm.whitelistSender("0xfe56202fe50b4B914734a00ff435bA1B2b5f0813");

  await web3.eth.sendTransaction({
    from: accounts[0],
    to: paymaster.address,
    value: 1e18,
  });
  console.log(`1 ETH deposited to Paymaster(${WhitelistPaymaster.address})`);
};
