import { Contract } from 'ethers'

import arbitrumOne_multiLot_abi from '../../abis/arbitrumOne/multiLot.json'
import arbitrumOne_priceFeed_abi from '../../abis/arbitrumOne/priceFeed.json'
import arbitrumOne_rusd_abi from '../../abis/arbitrumOne/rusd.json'
import goerli_multiLot_abi from '../../abis/goerli/multiLot.json'
import goerli_priceFeed_abi from '../../abis/goerli/priceFeed.json'
import goerli_rusd_abi from '../../abis/goerli/rusd.json'
import polygon_multiLot_abi from '../../abis/polygon/multiLot.json'
import polygon_priceFeed_abi from '../../abis/polygon/priceFeed.json'
import polygon_rusd_abi from '../../abis/polygon/rusd.json'

export function getContract(address, abi, defaultSignerOrProvider) {
  return new Contract(address, abi, defaultSignerOrProvider)
}
export function getPolygonSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0xebAFe0Dc33d03976AC497a33079dC374018C9dE2',
      polygon_rusd_abi,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x20332137f38af5ba8816d65657d324125a91993e',
      polygon_priceFeed_abi,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x2C0Cd4B2a5C7777c3a59536ECA4E366092fC161b',
      polygon_multiLot_abi,
      defaultSignerOrProvider
    ),
  }
}
export function getGoerliSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0x6D3F27853c3a0a00a57ee38E3d033d09701Fa7f6',
      goerli_rusd_abi,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x3Ee543fd47F8B62f57C2ae337fA384eb12Cae9cd',
      goerli_priceFeed_abi,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x441d138f08c717828f3fe6dae6fea32f5bc1f667',
      goerli_multiLot_abi,
      defaultSignerOrProvider
    ),
  }
}
export function getArbitrumOneSdk(defaultSignerOrProvider) {
  return {
    rusd: getContract(
      '0xdd5FD2737cbC3111E68B64a789a7083CAAa8c9CC',
      arbitrumOne_rusd_abi,
      defaultSignerOrProvider
    ),
    priceFeed: getContract(
      '0x799222AF47549789464557D6324cC6D31b1C7FD0',
      arbitrumOne_priceFeed_abi,
      defaultSignerOrProvider
    ),
    multiLot: getContract(
      '0x5178703354f8a1972b5889d5d5ca790bd6c7324e',
      arbitrumOne_multiLot_abi,
      defaultSignerOrProvider
    ),
  }
}
