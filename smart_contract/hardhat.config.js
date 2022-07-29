require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0' ,
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9DR5hdLvadDYCcubtILFRRFQsL0zs06p',
      accounts: [ '6d189502c119dd4bad3d27d784ab3538c915a7b88c0d2b22006737565bf15e18' ]
    }
  }
}