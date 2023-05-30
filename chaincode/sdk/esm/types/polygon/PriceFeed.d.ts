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

export interface PriceFeedInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment
    'ORACLE_ROLE()': FunctionFragment
    'getHistoricalPrice(string,uint256)': FunctionFragment
    'getPrice(string)': FunctionFragment
    'getRoleAdmin(bytes32)': FunctionFragment
    'grantRole(bytes32,address)': FunctionFragment
    'hasRole(bytes32,address)': FunctionFragment
    'initialize()': FunctionFragment
    'price(string,uint256)': FunctionFragment
    'renounceRole(bytes32,address)': FunctionFragment
    'revokeRole(bytes32,address)': FunctionFragment
    'store(uint256,string[],uint256[])': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'ORACLE_ROLE'
      | 'getHistoricalPrice'
      | 'getPrice'
      | 'getRoleAdmin'
      | 'grantRole'
      | 'hasRole'
      | 'initialize'
      | 'price'
      | 'renounceRole'
      | 'revokeRole'
      | 'store'
      | 'supportsInterface'
  ): FunctionFragment
  encodeFunctionData(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'ORACLE_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getHistoricalPrice',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getPrice',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'getRoleAdmin',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'hasRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'initialize', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'price',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'renounceRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'store',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>]
  ): string
  decodeFunctionResult(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'ORACLE_ROLE', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getHistoricalPrice',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getPrice', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getRoleAdmin',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'price', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'store', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike
  ): Result
  events: {
    'Initialized(uint8)': EventFragment
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment
    'RoleGranted(bytes32,address,address)': EventFragment
    'RoleRevoked(bytes32,address,address)': EventFragment
    'Stored(uint256,string[],uint256[])': EventFragment
  }
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Stored'): EventFragment
}
export interface InitializedEventObject {
  version: number
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>
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
export interface StoredEventObject {
  timestamp: BigNumber
  tokenIds: string[]
  prices: BigNumber[]
}
export type StoredEvent = TypedEvent<
  [BigNumber, string[], BigNumber[]],
  StoredEventObject
>
export type StoredEventFilter = TypedEventFilter<StoredEvent>
export interface PriceFeed extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: PriceFeedInterface
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
    ORACLE_ROLE(overrides?: CallOverrides): Promise<[string]>
    getHistoricalPrice(
      _tokenId: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
    getPrice(
      _tokenId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
    initialize(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    price(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
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
    store(
      _timestamp: PromiseOrValue<BigNumberish>,
      _tokenIds: PromiseOrValue<string>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
  }
  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>
  ORACLE_ROLE(overrides?: CallOverrides): Promise<string>
  getHistoricalPrice(
    _tokenId: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>
  getPrice(
    _tokenId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>
  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>
  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>
  initialize(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  price(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>
  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
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
  store(
    _timestamp: PromiseOrValue<BigNumberish>,
    _tokenIds: PromiseOrValue<string>[],
    _prices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>
  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>
    ORACLE_ROLE(overrides?: CallOverrides): Promise<string>
    getHistoricalPrice(
      _tokenId: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    getPrice(
      _tokenId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>
    initialize(overrides?: CallOverrides): Promise<void>
    price(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    store(
      _timestamp: PromiseOrValue<BigNumberish>,
      _tokenIds: PromiseOrValue<string>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>
  }
  filters: {
    'Initialized(uint8)'(version?: null): InitializedEventFilter
    Initialized(version?: null): InitializedEventFilter
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
    'Stored(uint256,string[],uint256[])'(
      timestamp?: null,
      tokenIds?: null,
      prices?: null
    ): StoredEventFilter
    Stored(timestamp?: null, tokenIds?: null, prices?: null): StoredEventFilter
  }
  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>
    ORACLE_ROLE(overrides?: CallOverrides): Promise<BigNumber>
    getHistoricalPrice(
      _tokenId: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    getPrice(
      _tokenId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    initialize(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    price(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
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
    store(
      _timestamp: PromiseOrValue<BigNumberish>,
      _tokenIds: PromiseOrValue<string>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }
  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>
    ORACLE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>
    getHistoricalPrice(
      _tokenId: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    getPrice(
      _tokenId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    initialize(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    price(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
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
    store(
      _timestamp: PromiseOrValue<BigNumberish>,
      _tokenIds: PromiseOrValue<string>[],
      _prices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
