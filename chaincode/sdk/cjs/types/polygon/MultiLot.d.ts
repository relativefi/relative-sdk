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

export interface MultiLotInterface extends utils.Interface {
  functions: {
    'RATIO_PRECISION()': FunctionFragment
    'collateralToken()': FunctionFragment
    'createLot(string,string[],uint256,uint256,uint256,bool,bool)': FunctionFragment
    'feePercentage()': FunctionFragment
    'initialize(address,address,uint256)': FunctionFragment
    'invite(uint256,address[])': FunctionFragment
    'joinLot(uint256,string,uint256)': FunctionFragment
    'lastLotId()': FunctionFragment
    'owner()': FunctionFragment
    'priceFeed()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'resolveLot(uint256)': FunctionFragment
    'setCollateralToken(address)': FunctionFragment
    'setPriceFeed(address)': FunctionFragment
    'totalFee()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'withdrawClaim(uint256)': FunctionFragment
    'withdrawFee()': FunctionFragment
    'withdrawRefund(uint256)': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'RATIO_PRECISION'
      | 'collateralToken'
      | 'createLot'
      | 'feePercentage'
      | 'initialize'
      | 'invite'
      | 'joinLot'
      | 'lastLotId'
      | 'owner'
      | 'priceFeed'
      | 'renounceOwnership'
      | 'resolveLot'
      | 'setCollateralToken'
      | 'setPriceFeed'
      | 'totalFee'
      | 'transferOwnership'
      | 'withdrawClaim'
      | 'withdrawFee'
      | 'withdrawRefund'
  ): FunctionFragment
  encodeFunctionData(
    functionFragment: 'RATIO_PRECISION',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'collateralToken',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'createLot',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'feePercentage',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'invite',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string
  encodeFunctionData(
    functionFragment: 'joinLot',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string
  encodeFunctionData(functionFragment: 'lastLotId', values?: undefined): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'priceFeed', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'resolveLot',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'setCollateralToken',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'setPriceFeed',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'totalFee', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'withdrawClaim',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'withdrawFee',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'withdrawRefund',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  decodeFunctionResult(
    functionFragment: 'RATIO_PRECISION',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'collateralToken',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'createLot', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'feePercentage',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'invite', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'joinLot', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'lastLotId', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'priceFeed', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'resolveLot', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setCollateralToken',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setPriceFeed',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'totalFee', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'withdrawClaim',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'withdrawFee', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'withdrawRefund',
    data: BytesLike
  ): Result
  events: {
    'ClaimWithdrawn(uint256,address,uint256)': EventFragment
    'FeeWithdrawn(uint256)': EventFragment
    'Initialized(uint8)': EventFragment
    'Invited(uint256,address,address[])': EventFragment
    'LotCreated(uint256,string,string[],uint256,uint256,address,bool,bool)': EventFragment
    'LotJoined(uint256,string,address,uint256)': EventFragment
    'LotResolved(uint256,uint256,string,uint256,uint256,uint256,uint256)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
    'RefundWithdrawn(uint256,address,uint256)': EventFragment
  }
  getEvent(nameOrSignatureOrTopic: 'ClaimWithdrawn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'FeeWithdrawn'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Invited'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LotCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LotJoined'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LotResolved'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RefundWithdrawn'): EventFragment
}
export interface ClaimWithdrawnEventObject {
  lotId: BigNumber
  user: string
  amount: BigNumber
}
export type ClaimWithdrawnEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ClaimWithdrawnEventObject
>
export type ClaimWithdrawnEventFilter = TypedEventFilter<ClaimWithdrawnEvent>
export interface FeeWithdrawnEventObject {
  amount: BigNumber
}
export type FeeWithdrawnEvent = TypedEvent<[BigNumber], FeeWithdrawnEventObject>
export type FeeWithdrawnEventFilter = TypedEventFilter<FeeWithdrawnEvent>
export interface InitializedEventObject {
  version: number
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>
export interface InvitedEventObject {
  lotId: BigNumber
  from: string
  to: string[]
}
export type InvitedEvent = TypedEvent<
  [BigNumber, string, string[]],
  InvitedEventObject
>
export type InvitedEventFilter = TypedEventFilter<InvitedEvent>
export interface LotCreatedEventObject {
  lotId: BigNumber
  tokenA: string
  tokenBChoices: string[]
  startEpoch: BigNumber
  duration: BigNumber
  creator: string
  isPrivate: boolean
  isChallenge: boolean
}
export type LotCreatedEvent = TypedEvent<
  [BigNumber, string, string[], BigNumber, BigNumber, string, boolean, boolean],
  LotCreatedEventObject
>
export type LotCreatedEventFilter = TypedEventFilter<LotCreatedEvent>
export interface LotJoinedEventObject {
  lotId: BigNumber
  token: string
  user: string
  size: BigNumber
}
export type LotJoinedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  LotJoinedEventObject
>
export type LotJoinedEventFilter = TypedEventFilter<LotJoinedEvent>
export interface LotResolvedEventObject {
  lotId: BigNumber
  size: BigNumber
  winningToken: string
  startPriceTokenA: BigNumber
  startPriceTokenB: BigNumber
  resolvePriceTokenA: BigNumber
  resolvePriceTokenB: BigNumber
}
export type LotResolvedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber],
  LotResolvedEventObject
>
export type LotResolvedEventFilter = TypedEventFilter<LotResolvedEvent>
export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>
export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>
export interface RefundWithdrawnEventObject {
  lotId: BigNumber
  user: string
  amount: BigNumber
}
export type RefundWithdrawnEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  RefundWithdrawnEventObject
>
export type RefundWithdrawnEventFilter = TypedEventFilter<RefundWithdrawnEvent>
export interface MultiLot extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: MultiLotInterface
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
    RATIO_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>
    collateralToken(overrides?: CallOverrides): Promise<[string]>
    createLot(
      _tokenA: PromiseOrValue<string>,
      _tokenBChoices: PromiseOrValue<string>[],
      _size: PromiseOrValue<BigNumberish>,
      _startEpoch: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _isPrivate: PromiseOrValue<boolean>,
      _isChallenge: PromiseOrValue<boolean>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    feePercentage(overrides?: CallOverrides): Promise<[BigNumber]>
    initialize(
      _priceFeed: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    invite(
      _lotId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    joinLot(
      _lotId: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    lastLotId(overrides?: CallOverrides): Promise<[BigNumber]>
    owner(overrides?: CallOverrides): Promise<[string]>
    priceFeed(overrides?: CallOverrides): Promise<[string]>
    renounceOwnership(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    resolveLot(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    setCollateralToken(
      _collateralToken: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    setPriceFeed(
      _priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    totalFee(overrides?: CallOverrides): Promise<[BigNumber]>
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    withdrawClaim(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    withdrawFee(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    withdrawRefund(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
  }
  RATIO_PRECISION(overrides?: CallOverrides): Promise<BigNumber>
  collateralToken(overrides?: CallOverrides): Promise<string>
  createLot(
    _tokenA: PromiseOrValue<string>,
    _tokenBChoices: PromiseOrValue<string>[],
    _size: PromiseOrValue<BigNumberish>,
    _startEpoch: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    _isPrivate: PromiseOrValue<boolean>,
    _isChallenge: PromiseOrValue<boolean>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  feePercentage(overrides?: CallOverrides): Promise<BigNumber>
  initialize(
    _priceFeed: PromiseOrValue<string>,
    _collateralToken: PromiseOrValue<string>,
    _feePercentage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  invite(
    _lotId: PromiseOrValue<BigNumberish>,
    _addresses: PromiseOrValue<string>[],
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  joinLot(
    _lotId: PromiseOrValue<BigNumberish>,
    _token: PromiseOrValue<string>,
    _size: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  lastLotId(overrides?: CallOverrides): Promise<BigNumber>
  owner(overrides?: CallOverrides): Promise<string>
  priceFeed(overrides?: CallOverrides): Promise<string>
  renounceOwnership(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  resolveLot(
    _lotId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  setCollateralToken(
    _collateralToken: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  setPriceFeed(
    _priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  totalFee(overrides?: CallOverrides): Promise<BigNumber>
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  withdrawClaim(
    _lotId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  withdrawFee(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  withdrawRefund(
    _lotId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  callStatic: {
    RATIO_PRECISION(overrides?: CallOverrides): Promise<BigNumber>
    collateralToken(overrides?: CallOverrides): Promise<string>
    createLot(
      _tokenA: PromiseOrValue<string>,
      _tokenBChoices: PromiseOrValue<string>[],
      _size: PromiseOrValue<BigNumberish>,
      _startEpoch: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _isPrivate: PromiseOrValue<boolean>,
      _isChallenge: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>
    feePercentage(overrides?: CallOverrides): Promise<BigNumber>
    initialize(
      _priceFeed: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    invite(
      _lotId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>
    joinLot(
      _lotId: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    lastLotId(overrides?: CallOverrides): Promise<BigNumber>
    owner(overrides?: CallOverrides): Promise<string>
    priceFeed(overrides?: CallOverrides): Promise<string>
    renounceOwnership(overrides?: CallOverrides): Promise<void>
    resolveLot(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>
    setCollateralToken(
      _collateralToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    setPriceFeed(
      _priceFeed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    totalFee(overrides?: CallOverrides): Promise<BigNumber>
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>
    withdrawClaim(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
    withdrawFee(overrides?: CallOverrides): Promise<boolean>
    withdrawRefund(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>
  }
  filters: {
    'ClaimWithdrawn(uint256,address,uint256)'(
      lotId?: null,
      user?: null,
      amount?: null
    ): ClaimWithdrawnEventFilter
    ClaimWithdrawn(
      lotId?: null,
      user?: null,
      amount?: null
    ): ClaimWithdrawnEventFilter
    'FeeWithdrawn(uint256)'(amount?: null): FeeWithdrawnEventFilter
    FeeWithdrawn(amount?: null): FeeWithdrawnEventFilter
    'Initialized(uint8)'(version?: null): InitializedEventFilter
    Initialized(version?: null): InitializedEventFilter
    'Invited(uint256,address,address[])'(
      lotId?: null,
      from?: null,
      to?: null
    ): InvitedEventFilter
    Invited(lotId?: null, from?: null, to?: null): InvitedEventFilter
    'LotCreated(uint256,string,string[],uint256,uint256,address,bool,bool)'(
      lotId?: null,
      tokenA?: null,
      tokenBChoices?: null,
      startEpoch?: null,
      duration?: null,
      creator?: null,
      isPrivate?: null,
      isChallenge?: null
    ): LotCreatedEventFilter
    LotCreated(
      lotId?: null,
      tokenA?: null,
      tokenBChoices?: null,
      startEpoch?: null,
      duration?: null,
      creator?: null,
      isPrivate?: null,
      isChallenge?: null
    ): LotCreatedEventFilter
    'LotJoined(uint256,string,address,uint256)'(
      lotId?: null,
      token?: null,
      user?: null,
      size?: null
    ): LotJoinedEventFilter
    LotJoined(
      lotId?: null,
      token?: null,
      user?: null,
      size?: null
    ): LotJoinedEventFilter
    'LotResolved(uint256,uint256,string,uint256,uint256,uint256,uint256)'(
      lotId?: null,
      size?: null,
      winningToken?: null,
      startPriceTokenA?: null,
      startPriceTokenB?: null,
      resolvePriceTokenA?: null,
      resolvePriceTokenB?: null
    ): LotResolvedEventFilter
    LotResolved(
      lotId?: null,
      size?: null,
      winningToken?: null,
      startPriceTokenA?: null,
      startPriceTokenB?: null,
      resolvePriceTokenA?: null,
      resolvePriceTokenB?: null
    ): LotResolvedEventFilter
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    'RefundWithdrawn(uint256,address,uint256)'(
      lotId?: null,
      user?: null,
      amount?: null
    ): RefundWithdrawnEventFilter
    RefundWithdrawn(
      lotId?: null,
      user?: null,
      amount?: null
    ): RefundWithdrawnEventFilter
  }
  estimateGas: {
    RATIO_PRECISION(overrides?: CallOverrides): Promise<BigNumber>
    collateralToken(overrides?: CallOverrides): Promise<BigNumber>
    createLot(
      _tokenA: PromiseOrValue<string>,
      _tokenBChoices: PromiseOrValue<string>[],
      _size: PromiseOrValue<BigNumberish>,
      _startEpoch: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _isPrivate: PromiseOrValue<boolean>,
      _isChallenge: PromiseOrValue<boolean>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    feePercentage(overrides?: CallOverrides): Promise<BigNumber>
    initialize(
      _priceFeed: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    invite(
      _lotId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    joinLot(
      _lotId: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    lastLotId(overrides?: CallOverrides): Promise<BigNumber>
    owner(overrides?: CallOverrides): Promise<BigNumber>
    priceFeed(overrides?: CallOverrides): Promise<BigNumber>
    renounceOwnership(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    resolveLot(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    setCollateralToken(
      _collateralToken: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    setPriceFeed(
      _priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    totalFee(overrides?: CallOverrides): Promise<BigNumber>
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    withdrawClaim(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    withdrawFee(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    withdrawRefund(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
  }
  populateTransaction: {
    RATIO_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>
    collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>
    createLot(
      _tokenA: PromiseOrValue<string>,
      _tokenBChoices: PromiseOrValue<string>[],
      _size: PromiseOrValue<BigNumberish>,
      _startEpoch: PromiseOrValue<BigNumberish>,
      _duration: PromiseOrValue<BigNumberish>,
      _isPrivate: PromiseOrValue<boolean>,
      _isChallenge: PromiseOrValue<boolean>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    feePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>
    initialize(
      _priceFeed: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _feePercentage: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    invite(
      _lotId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    joinLot(
      _lotId: PromiseOrValue<BigNumberish>,
      _token: PromiseOrValue<string>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    lastLotId(overrides?: CallOverrides): Promise<PopulatedTransaction>
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>
    priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>
    renounceOwnership(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    resolveLot(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    setCollateralToken(
      _collateralToken: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    setPriceFeed(
      _priceFeed: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    totalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    withdrawClaim(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    withdrawFee(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    withdrawRefund(
      _lotId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
  }
}
