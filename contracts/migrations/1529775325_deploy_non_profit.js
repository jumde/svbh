const nonProfit = artifacts.require('nonProfit')

module.exports = function(deployer) {
  deployer.deploy(nonProfit)
};
