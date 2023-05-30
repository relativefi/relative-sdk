import type {
  EventFragment,
  FunctionFragment,
  Result,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'

import type {
  OnEvent,
  PromiseOrValue,
  TypedEvent,
  TypedEventFilter,
  TypedListener,
} from '../common'

export interface RusdInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment
    'MINTER_ROLE()': FunctionFragment
    'TRANSFER_ROLE()': FunctionFragment
    'allowance(address,address)': FunctionFragment
    'allowedToDrip(address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'burn(uint256)': FunctionFragment
    'burnFrom(address,uint256)': FunctionFragment
    'decimals()': FunctionFragment
    'decreaseAllowance(address,uint256)': FunctionFragment
    'faucetDrip()': FunctionFragment
    'getRoleAdmin(bytes32)': FunctionFragment
    'grantMinterRole(address)': FunctionFragment
    'grantRole(bytes32,address)': FunctionFragment
    'grantTransferRole(address)': FunctionFragment
    'hasRole(bytes32,address)': FunctionFragment
    'increaseAllowance(address,uint256)': FunctionFragment
    'mint(address,uint256)': FunctionFragment
    'name()': FunctionFragment
    'pause()': FunctionFragment
    'paused()': FunctionFragment
    'renounceRole(bytes32,address)': FunctionFragment
    'revokeMinterRole(address)': FunctionFragment
    'revokeRole(bytes32,address)': FunctionFragment
    'revokeTransferRole(address)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'symbol()': FunctionFragment
    'totalSupply()': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'unpause()': FunctionFragment
    'waitTime()': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'MINTER_ROLE'
      | 'TRANSFER_ROLE'
      | 'allowance'
      | 'allowedToDrip'
      | 'approve'
      | 'balanceOf'
      | 'burn'
      | 'burnFrom'
      | 'decimals'
      | 'decreaseAllowance'
      | 'faucetDrip'
      | 'getRoleAdmin'
      | 'grantMinterRole'
      | 'grantRole'
      | 'grantTransferRole'
      | 'hasRole'
      | 'increaseAllowance'
      | 'mint'
      | 'name'
      | 'pause'
      | 'paused'
      | 'renounceRole'
      | 'revokeMinterRole'
      | 'revokeRole'
      | 'revokeTransferRole'
      | 'supportsInterface'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'unpause'
      | 'waitTime'
  ): FunctionFragment
  encodeFunctionData(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'MINTER_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'TRANSFER_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'allowedToDrip',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'burn',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'burnFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'faucetDrip', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getRoleAdmin',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(
    functionFragment: 'grantMinterRole',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'grantTransferRole',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'hasRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'mint',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeMinterRole',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeTransferRole',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string
  encodeFunctionData(functionFragment: 'waitTime', values?: undefined): string
  decodeFunctionResult(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'MINTER_ROLE', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'TRANSFER_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'allowedToDrip',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'burnFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'faucetDrip', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getRoleAdmin',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'grantMinterRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'grantTransferRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'revokeMinterRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'revokeTransferRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'waitTime', data: BytesLike): Result
  events: {
    'Approval(address,address,uint256)': EventFragment
    'Paused(address)': EventFragment
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment
    'RoleGranted(bytes32,address,address)': EventFragment
    'RoleRevoked(bytes32,address,address)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
    'Unpaused(address)': EventFragment
  }
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment
}
export interface ApprovalEventObject {
  owner: string
  spender: string
  value: BigNumber
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>
export interface PausedEventObject {
  account: string
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>
export type PausedEventFilter = TypedEventFilter<PausedEvent>
export interface RoleAdminChangedEventObject {
  role: string
  previousAdminRole: string
  newAdminRole: string
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>
export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>
export interface RoleGrantedEventObject {
  role: string
  account: string
  sender: string
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>
export interface RoleRevokedEventObject {
  role: string
  account: string
  sender: string
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>
export interface TransferEventObject {
  from: string
  to: string
  value: BigNumber
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>
export type TransferEventFilter = TypedEventFilter<TransferEvent>
export interface UnpausedEventObject {
  account: string
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>
export interface Rusd extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: RusdInterface
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>
  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>
    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>
    TRANSFER_ROLE(overrides?: CallOverrides): Promise<[string]>
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
    allowedToDrip(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    burnFrom(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    decimals(overrides?: CallOverrides): Promise<[number]>
    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    faucetDrip(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>
    grantMinterRole(
      newMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    grantTransferRole(
      newTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    name(overrides?: CallOverrides): Promise<[string]>
    pause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    paused(overrides?: CallOverrides): Promise<[boolean]>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    revokeMinterRole(
      oldMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    revokeTransferRole(
      oldTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
    symbol(overrides?: CallOverrides): Promise<[string]>
    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>
    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    unpause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    waitTime(overrides?: CallOverrides): Promise<[BigNumber]>
  }
  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>
  MINTER_ROLE(overrides?: CallOverrides): Promise<string>
  TRANSFER_ROLE(overrides?: CallOverrides): Promise<string>
  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>
  allowedToDrip(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>
  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>
  burn(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  burnFrom(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  decimals(overrides?: CallOverrides): Promise<number>
  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  faucetDrip(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>
  grantMinterRole(
    newMinter: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  grantTransferRole(
    newTransferer: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>
  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  mint(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  name(overrides?: CallOverrides): Promise<string>
  pause(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  paused(overrides?: CallOverrides): Promise<boolean>
  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  revokeMinterRole(
    oldMinter: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  revokeTransferRole(
    oldTransferer: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>
  symbol(overrides?: CallOverrides): Promise<string>
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>
  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  unpause(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  waitTime(overrides?: CallOverrides): Promise<BigNumber>
  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>
    MINTER_ROLE(overrides?: CallOverrides): Promise<string>
    TRANSFER_ROLE(overrides?: CallOverrides): Promise<string>
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    allowedToDrip(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>
    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    burnFrom(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    decimals(overrides?: CallOverrides): Promise<number>
    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    faucetDrip(overrides?: CallOverrides): Promise<void>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>
    grantMinterRole(
      newMinter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    grantTransferRole(
      newTransferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>
    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    name(overrides?: CallOverrides): Promise<string>
    pause(overrides?: CallOverrides): Promise<void>
    paused(overrides?: CallOverrides): Promise<boolean>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    revokeMinterRole(
      oldMinter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    revokeTransferRole(
      oldTransferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>
    symbol(overrides?: CallOverrides): Promise<string>
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>
    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    unpause(overrides?: CallOverrides): Promise<void>
    waitTime(overrides?: CallOverrides): Promise<BigNumber>
  }
  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter
    'Paused(address)'(account?: null): PausedEventFilter
    Paused(account?: null): PausedEventFilter
    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter
    'RoleGranted(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter
    'RoleRevoked(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter
    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter
    'Unpaused(address)'(account?: null): UnpausedEventFilter
    Unpaused(account?: null): UnpausedEventFilter
  }
  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>
    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>
    TRANSFER_ROLE(overrides?: CallOverrides): Promise<BigNumber>
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    allowedToDrip(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    burnFrom(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    decimals(overrides?: CallOverrides): Promise<BigNumber>
    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    faucetDrip(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    grantMinterRole(
      newMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    grantTransferRole(
      newTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    name(overrides?: CallOverrides): Promise<BigNumber>
    pause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    paused(overrides?: CallOverrides): Promise<BigNumber>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    revokeMinterRole(
      oldMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    revokeTransferRole(
      oldTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    symbol(overrides?: CallOverrides): Promise<BigNumber>
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>
    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    unpause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    waitTime(overrides?: CallOverrides): Promise<BigNumber>
  }
  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>
    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>
    TRANSFER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    allowedToDrip(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    burnFrom(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>
    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    faucetDrip(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    grantMinterRole(
      newMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    grantTransferRole(
      newTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    mint(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>
    pause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    revokeMinterRole(
      oldMinter: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    revokeTransferRole(
      oldTransferer: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>
    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    unpause(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    waitTime(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
