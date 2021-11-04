require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stool dash soap coconut grid private fringe general'; 
let testAccounts = [
"0x2f609c6985b099bf662acae1594975e2d80641c914196ece9c10d0fca236be7e",
"0xb9b718680a3f007aacbfdd5deca7502a3d32cfef21605a985bfb0c0476a02021",
"0xb16d05e4b507d1030d5c499493bc7246e6b33abcd922e9fd3f2c220493d07849",
"0x8838f79ee079878f0cfe700df9c27d484b84ceb19d33a17b959d75c1a56f348b",
"0x6ae76c85c30358ca61a5cb97cc8e681e98ad39bccc4bc2d94242e42ae232f1a9",
"0x295b6c764b9c50645bf26014b3f7f4444a99f9a90c8de2433a33e056c48c7aae",
"0xaca957e06da9cc8fa1264bb5e67af8713d5682e572f7389bf62a31fbf581facf",
"0xd93be4afed8ed105a5b921d821fef4b4b4c9fc2d5e85d26c9935b043dfb7c1eb",
"0x1650d388fcbe90ad77ce7a5f9e652cb14b58d3b90ff71648a14bdd23d281da3f",
"0x580dbfa5105949b69eba2945a28340c12cf4059c426b5f2801dbfdcc4093ae5c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

