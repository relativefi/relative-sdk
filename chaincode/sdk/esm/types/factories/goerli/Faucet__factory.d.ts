import type { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { Faucet, FaucetInterface } from '../../goerli/Faucet'

export declare class Faucet__factory {
  static readonly abi: readonly [
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: '_tokenInstance'
          readonly type: 'address'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'constructor'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: '_address'
          readonly type: 'address'
        }
      ]
      readonly name: 'allowedToWithdraw'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'requestTokens'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'tokenAmount'
      readonly outputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: ''
          readonly type: 'uint256'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'tokenInstance'
      readonly outputs: readonly [
        {
          readonly internalType: 'contract ERC20'
          readonly name: ''
          readonly type: 'address'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'waitTime'
      readonly outputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: ''
          readonly type: 'uint256'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    }
  ]
  static createInterface(): FaucetInterface
  static connect(address: string, signerOrProvider: Signer | Provider): Faucet
}
