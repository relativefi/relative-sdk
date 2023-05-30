import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  BaseContract,
  BigNumber,
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

export interface FaucetInterface extends utils.Interface {
  functions: {
    'allowedToWithdraw(address)': FunctionFragment
    'requestTokens()': FunctionFragment
    'tokenAmount()': FunctionFragment
    'tokenInstance()': FunctionFragment
    'waitTime()': FunctionFragment
  }
  getFunction(
    nameOrSignatureOrTopic:
      | 'allowedToWithdraw'
      | 'requestTokens'
      | 'tokenAmount'
      | 'tokenInstance'
      | 'waitTime'
  ): FunctionFragment
  encodeFunctionData(
    functionFragment: 'allowedToWithdraw',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'requestTokens',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'tokenAmount',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'tokenInstance',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'waitTime', values?: undefined): string
  decodeFunctionResult(
    functionFragment: 'allowedToWithdraw',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requestTokens',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'tokenAmount', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'tokenInstance',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'waitTime', data: BytesLike): Result
  events: {}
}
export interface Faucet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>
  interface: FaucetInterface
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
    allowedToWithdraw(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>
    requestTokens(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<ContractTransaction>
    tokenAmount(overrides?: CallOverrides): Promise<[BigNumber]>
    tokenInstance(overrides?: CallOverrides): Promise<[string]>
    waitTime(overrides?: CallOverrides): Promise<[BigNumber]>
  }
  allowedToWithdraw(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>
  requestTokens(
    overrides?: Overrides & {
      from?: PromiseOrValue<string>
    }
  ): Promise<ContractTransaction>
  tokenAmount(overrides?: CallOverrides): Promise<BigNumber>
  tokenInstance(overrides?: CallOverrides): Promise<string>
  waitTime(overrides?: CallOverrides): Promise<BigNumber>
  callStatic: {
    allowedToWithdraw(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>
    requestTokens(overrides?: CallOverrides): Promise<void>
    tokenAmount(overrides?: CallOverrides): Promise<BigNumber>
    tokenInstance(overrides?: CallOverrides): Promise<string>
    waitTime(overrides?: CallOverrides): Promise<BigNumber>
  }
  filters: {}
  estimateGas: {
    allowedToWithdraw(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
    requestTokens(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<BigNumber>
    tokenAmount(overrides?: CallOverrides): Promise<BigNumber>
    tokenInstance(overrides?: CallOverrides): Promise<BigNumber>
    waitTime(overrides?: CallOverrides): Promise<BigNumber>
  }
  populateTransaction: {
    allowedToWithdraw(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
    requestTokens(
      overrides?: Overrides & {
        from?: PromiseOrValue<string>
      }
    ): Promise<PopulatedTransaction>
    tokenAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>
    tokenInstance(overrides?: CallOverrides): Promise<PopulatedTransaction>
    waitTime(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
