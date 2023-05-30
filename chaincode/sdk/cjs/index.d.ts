import { Signer, providers } from 'ethers'

import * as types from './types'

export declare function getContract(
  address: string,
  abi: object,
  defaultSignerOrProvider: Signer | providers.Provider
): any
export type PolygonSdk = ReturnType<typeof getPolygonSdk>
export declare function getPolygonSdk(
  defaultSignerOrProvider: Signer | providers.Provider
): {
  rusd: types.polygon.Rusd
  priceFeed: types.polygon.PriceFeed
  multiLot: types.polygon.MultiLot
}
export type GoerliSdk = ReturnType<typeof getGoerliSdk>
export declare function getGoerliSdk(
  defaultSignerOrProvider: Signer | providers.Provider
): {
  rusd: types.goerli.Rusd
  priceFeed: types.goerli.PriceFeed
  multiLot: types.goerli.MultiLot
}
export type ArbitrumOneSdk = ReturnType<typeof getArbitrumOneSdk>
export declare function getArbitrumOneSdk(
  defaultSignerOrProvider: Signer | providers.Provider
): {
  rusd: types.arbitrumOne.Rusd
  priceFeed: types.arbitrumOne.PriceFeed
  multiLot: types.arbitrumOne.MultiLot
}
