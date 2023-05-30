import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    polygon: {
      rusd: '0xebAFe0Dc33d03976AC497a33079dC374018C9dE2',
      priceFeed: '0x20332137f38af5ba8816d65657d324125a91993e',
      multiLot: '0x2C0Cd4B2a5C7777c3a59536ECA4E366092fC161b',
    },
    goerli: {
      rusd: '0x6D3F27853c3a0a00a57ee38E3d033d09701Fa7f6',
      priceFeed: '0x3Ee543fd47F8B62f57C2ae337fA384eb12Cae9cd',
      multiLot: '0x441d138f08c717828f3fe6dae6fea32f5bc1f667',
    },
    arbitrumOne: {
      rusd: '0xdd5FD2737cbC3111E68B64a789a7083CAAa8c9CC',
      priceFeed: '0x799222AF47549789464557D6324cC6D31b1C7FD0',
      multiLot: '0x5178703354f8a1972b5889d5d5ca790bd6c7324e',
    },
  },
  outputPath: './src/chaincode/sdk',
})
