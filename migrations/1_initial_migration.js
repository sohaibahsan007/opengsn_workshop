const Migrations = artifacts.require("Migrations");

module.exports = function (deployer, network, accounts) {
  console.log("Starting deployment of Migrations...");
  deployer
    .deploy(Migrations, { gas: 6721975, from: accounts[0] })
    .then(() => {
      console.log("Migrations deployed successfully");
    })
    .catch((error) => {
      console.error("Error deploying Migrations:", error);
    });
};
