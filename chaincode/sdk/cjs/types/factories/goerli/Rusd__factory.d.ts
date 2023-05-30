import type { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { Rusd, RusdInterface } from '../../goerli/Rusd'

export declare class Rusd__factory {
  static readonly abi: readonly [
    {
      readonly inputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'constructor'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'owner'
          readonly type: 'address'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'spender'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'value'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'Approval'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'Paused'
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
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'from'
          readonly type: 'address'
        },
        {
          readonly indexed: true
          readonly internalType: 'address'
          readonly name: 'to'
          readonly type: 'address'
        },
        {
          readonly indexed: false
          readonly internalType: 'uint256'
          readonly name: 'value'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'Transfer'
      readonly type: 'event'
    },
    {
      readonly anonymous: false
      readonly inputs: readonly [
        {
          readonly indexed: false
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'Unpaused'
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
      readonly name: 'MINTER_ROLE'
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
      readonly name: 'TRANSFER_ROLE'
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
          readonly internalType: 'address'
          readonly name: 'owner'
          readonly type: 'address'
        },
        {
          readonly internalType: 'address'
          readonly name: 'spender'
          readonly type: 'address'
        }
      ]
      readonly name: 'allowance'
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
          readonly name: '_address'
          readonly type: 'address'
        }
      ]
      readonly name: 'allowedToDrip'
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
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'spender'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'approve'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        }
      ]
      readonly name: 'balanceOf'
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
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'burn'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'account'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'burnFrom'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'decimals'
      readonly outputs: readonly [
        {
          readonly internalType: 'uint8'
          readonly name: ''
          readonly type: 'uint8'
        }
      ]
      readonly stateMutability: 'pure'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'spender'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'subtractedValue'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'decreaseAllowance'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'faucetDrip'
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
          readonly internalType: 'address'
          readonly name: 'newMinter'
          readonly type: 'address'
        }
      ]
      readonly name: 'grantMinterRole'
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
      readonly name: 'grantRole'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'newTransferer'
          readonly type: 'address'
        }
      ]
      readonly name: 'grantTransferRole'
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
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'spender'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'addedValue'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'increaseAllowance'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'to'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'mint'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'name'
      readonly outputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: ''
          readonly type: 'string'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'pause'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'paused'
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
          readonly internalType: 'address'
          readonly name: 'oldMinter'
          readonly type: 'address'
        }
      ]
      readonly name: 'revokeMinterRole'
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
          readonly internalType: 'address'
          readonly name: 'oldTransferer'
          readonly type: 'address'
        }
      ]
      readonly name: 'revokeTransferRole'
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
    },
    {
      readonly inputs: readonly []
      readonly name: 'symbol'
      readonly outputs: readonly [
        {
          readonly internalType: 'string'
          readonly name: ''
          readonly type: 'string'
        }
      ]
      readonly stateMutability: 'view'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'totalSupply'
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
          readonly name: 'to'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'transfer'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly [
        {
          readonly internalType: 'address'
          readonly name: 'from'
          readonly type: 'address'
        },
        {
          readonly internalType: 'address'
          readonly name: 'to'
          readonly type: 'address'
        },
        {
          readonly internalType: 'uint256'
          readonly name: 'amount'
          readonly type: 'uint256'
        }
      ]
      readonly name: 'transferFrom'
      readonly outputs: readonly [
        {
          readonly internalType: 'bool'
          readonly name: ''
          readonly type: 'bool'
        }
      ]
      readonly stateMutability: 'nonpayable'
      readonly type: 'function'
    },
    {
      readonly inputs: readonly []
      readonly name: 'unpause'
      readonly outputs: readonly []
      readonly stateMutability: 'nonpayable'
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
  static createInterface(): RusdInterface
  static connect(address: string, signerOrProvider: Signer | Provider): Rusd
}
