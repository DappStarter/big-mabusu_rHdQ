require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender suspect bike deny soccer plastic coral light army ghost'; 
let testAccounts = [
"0x51e7374227d18825074fa7f3008d46f03c13eb7c2f486c5b95422f3c96c8e7f7",
"0xa2f25b93f330628f4c619f431af7c7f85a855832e402096587b16ffdbddf09d1",
"0x55d651f58d3f4a88431cd6a1b65ef5311b51357e57b80dd99d1cd0dc9c8d191d",
"0x7ba127afc035821ceae0340b20e6fcdee131689342f3fbb795ed84d60dc05f0f",
"0x184f6730f80e093a4346987744ec2e98fc004cc149a6808b467fca45ccf04ec5",
"0xbd56bd461d830920e788a743ae2ba5b78375fbbefe067a198f711850782c98e2",
"0x2e64cbfd499031908c1b1b2fa4f91fba870e89b9b695a196f3890e6400ffa056",
"0xfc377ab04067d0a8c4102af23fa852133ae09480f16e6ccc1e2d685012fa9a4e",
"0xdbda521bd649d2099572063f88d2721a12f768500647c5528c3452bcd2c67f0d",
"0xdaa8551b084e21fcd08d33c4c8cc6b118e029772e9362054b9cd6b0c88633372"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

