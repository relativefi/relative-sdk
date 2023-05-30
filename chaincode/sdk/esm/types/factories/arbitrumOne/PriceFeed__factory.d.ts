import type { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { PriceFeed, PriceFeedInterface } from '../../arbitrumOne/PriceFeed'

export declare class PriceFeed__factory {
  static readonly abi: readonly [
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint8'
          readonly name: 'version'
          readonly type: 'uint8'
        }
      ]
      readonly name: 'Initialized'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: true
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly indexed: true
          readonly internalType: 'bytes32'
          readonly name: 'previousAdminRole'
          readonly type: 'bytes32'
        },
        {
          readonly indexed: true
          readonly internalType: 'bytes32'
          readonly name: 'newAdminRole'
          readonly type: 'bytes32'
        }
      ]
      readonly name: 'RoleAdminChanged'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: true
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'sender'
          readonly type: 'address'
        }
      ]
      readonly name: 'RoleGranted'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: true
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'sender'
          readonly type: 'address'
        }
      ]
      readonly name: 'RoleRevoked'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'timestamp'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'string[]'
          readonly name: 'tokenIds'
          readonly type: 'string[]'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256[]'
          readonly name: 'prices'
          readonly type: 'uint256[]'
        }
      ]
      readonly name: 'Stored'
      readonly type: 'event'
    },
    {
      readonly inputs: readonly []
      readonly name: 'DEFAULT_ADMIN_ROLE'
      readonly outputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: ''
          readonly type: 'bytes32'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'ORACLE_ROLE'
      readonly outputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: ''
          readonly type: 'bytes32'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: '_tokenId'
          readonly type: 'string'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_timestamp'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'getHistoricalPrice'
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
      readonly inputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: '_tokenId'
          readonly type: 'string'
        }
      ]
      readonly name: 'getPrice'
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
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        }
      ]
      readonly name: 'getRoleAdmin'
      readonly outputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: ''
          readonly type: 'bytes32'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'grantRole'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'hasRole'
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
      readonly name: 'initialize'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: ''
          readonly type: 'string'
        },
        {
          readonly internalType: 'uint256'
          readonly name: ''
          readonly type: 'uint256'
        }
      ]
      readonly name: 'price'
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
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'renounceRole'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes32'
          readonly name: 'role'
          readonly type: 'bytes32'
        },
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'revokeRole'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_timestamp'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'string[]'
          readonly name: '_tokenIds'
          readonly type: 'string[]'
        },
        {
          readonly internalType: 'uint256[]'
          readonly name: '_prices'
          readonly type: 'uint256[]'
        }
      ]
      readonly name: 'store'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'bytes4'
          readonly name: 'interfaceId'
          readonly type: 'bytes4'
        }
      ]
      readonly name: 'supportsInterface'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    }
  ]
  static createInterface(): PriceFeedInterface
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceFeed
}
