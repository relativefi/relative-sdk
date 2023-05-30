import type { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { MultiLot, MultiLotInterface } from '../../polygon/MultiLot'

export declare class MultiLot__factory {
  static readonly abi: readonly [
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'user'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'ClaimWithdrawn'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'FeeWithdrawn'
      readonly type: 'event'
    },
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
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'from'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'address[]'
          readonly name: 'to'
          readonly type: 'address[]'
        }
      ]
      readonly name: 'Invited'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'string'
          readonly name: 'tokenA'
          readonly type: 'string'
        },
        {
          readonly indexed: false
          readonly internalType: 'string[]'
          readonly name: 'tokenBChoices'
          readonly type: 'string[]'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'startEpoch'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'duration'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'creator'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'bool'
          readonly name: 'isPrivate'
          readonly type: 'bool'
        },
        {
          readonly indexed: false
          readonly internalType: 'bool'
          readonly name: 'isChallenge'
          readonly type: 'bool'
        }
      ]
      readonly name: 'LotCreated'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'string'
          readonly name: 'token'
          readonly type: 'string'
        },
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'user'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'size'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'LotJoined'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'size'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'string'
          readonly name: 'winningToken'
          readonly type: 'string'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'startPriceTokenA'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'startPriceTokenB'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'resolvePriceTokenA'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'resolvePriceTokenB'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'LotResolved'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'previousOwner'
          readonly type: 'address'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'newOwner'
          readonly type: 'address'
        }
      ]
      readonly name: 'OwnershipTransferred'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'lotId'
          readonly type: 'uint256'
        },
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'user'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'RefundWithdrawn'
      readonly type: 'event'
    },
    {
      readonly inputs: readonly []
      readonly name: 'RATIO_PRECISION'
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
      readonly name: 'collateralToken'
      readonly outputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: ''
          readonly type: 'address'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: '_tokenA'
          readonly type: 'string'
        },
        {
          readonly internalType: 'string[]'
          readonly name: '_tokenBChoices'
          readonly type: 'string[]'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_size'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_startEpoch'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_duration'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'bool'
          readonly name: '_isPrivate'
          readonly type: 'bool'
        },
        {
          readonly internalType: 'bool'
          readonly name: '_isChallenge'
          readonly type: 'bool'
        }
      ]
      readonly name: 'createLot'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'feePercentage'
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
          readonly internalType: 'address'
          readonly name: '_priceFeed'
          readonly type: 'address'
        },
        {
          readonly internalType: 'address'
          readonly name: '_collateralToken'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_feePercentage'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'initialize'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_lotId'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'address[]'
          readonly name: '_addresses'
          readonly type: 'address[]'
        }
      ]
      readonly name: 'invite'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_lotId'
          readonly type: 'uint256'
        },
        {
          readonly internalType: 'string'
          readonly name: '_token'
          readonly type: 'string'
        },
        {
          readonly internalType: 'uint256'
          readonly name: '_size'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'joinLot'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'lastLotId'
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
      readonly name: 'owner'
      readonly outputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: ''
          readonly type: 'address'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'priceFeed'
      readonly outputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: ''
          readonly type: 'address'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'renounceOwnership'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_lotId'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'resolveLot'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: '_collateralToken'
          readonly type: 'address'
        }
      ]
      readonly name: 'setCollateralToken'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: '_priceFeed'
          readonly type: 'address'
        }
      ]
      readonly name: 'setPriceFeed'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'totalFee'
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
          readonly internalType: 'address'
          readonly name: 'newOwner'
          readonly type: 'address'
        }
      ]
      readonly name: 'transferOwnership'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_lotId'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'withdrawClaim'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: 'isSuccessful'
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'withdrawFee'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: 'isSuccessful'
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'uint256'
          readonly name: '_lotId'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'withdrawRefund'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: 'isSuccessful'
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    }
  ]
  static createInterface(): MultiLotInterface
  static connect(address: string, signerOrProvider: Signer | Provider): MultiLot
}
