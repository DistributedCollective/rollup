/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IArbTokenBridgeInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'customTokenRegistered(address,address)': FunctionFragment
    'migrate(address,address,address,uint256)': FunctionFragment
    'mintFromL1(address,address,address,uint256,bytes,bytes)': FunctionFragment
    'withdraw(address,address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'customTokenRegistered',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'migrate',
    values: [string, string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'mintFromL1',
    values: [string, string, string, BigNumberish, BytesLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [string, string, string, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'customTokenRegistered',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mintFromL1', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {
    'CustomTokenRegistered(address,address)': EventFragment
    'MintAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TokenCreated(address,address)': EventFragment
    'TokenMigrated(address,address,uint256)': EventFragment
    'TokenMinted(address,address,address,address,uint256,bool)': EventFragment
    'WithdrawToken(uint256,address,uint256,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'CustomTokenRegistered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'MintAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenMigrated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TokenMinted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawToken'): EventFragment
}

export class IArbTokenBridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IArbTokenBridgeInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    migrate(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    mintFromL1(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'mintFromL1(address,address,address,uint256,bytes,bytes)'(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdraw(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'withdraw(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateL2TokenAddress(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  customTokenRegistered(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'customTokenRegistered(address,address)'(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  migrate(
    l1ERC20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'migrate(address,address,address,uint256)'(
    l1ERC20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  mintFromL1(
    l1ERC20: string,
    sender: string,
    dest: string,
    amount: BigNumberish,
    deployData: BytesLike,
    callHookData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'mintFromL1(address,address,address,uint256,bytes,bytes)'(
    l1ERC20: string,
    sender: string,
    dest: string,
    amount: BigNumberish,
    deployData: BytesLike,
    callHookData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdraw(
    l1ERC20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'withdraw(address,address,address,uint256)'(
    l1ERC20: string,
    sender: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    migrate(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    mintFromL1(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'mintFromL1(address,address,address,uint256,bytes,bytes)'(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    withdraw(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'withdraw(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {
    CustomTokenRegistered(
      l1Address: string | null,
      l2Address: string | null
    ): EventFilter

    MintAndCallTriggered(
      success: null,
      sender: string | null,
      dest: string | null,
      amount: null,
      callHookData: null
    ): EventFilter

    TokenCreated(
      l1Address: string | null,
      l2Address: string | null
    ): EventFilter

    TokenMigrated(
      l1Address: string | null,
      account: string | null,
      amount: null
    ): EventFilter

    TokenMinted(
      l1Address: null,
      l2Address: string | null,
      sender: string | null,
      dest: string | null,
      amount: null,
      usedCallHook: null
    ): EventFilter

    WithdrawToken(
      withdrawalId: null,
      l1Address: string | null,
      amount: null,
      destination: string | null,
      exitNum: BigNumberish | null
    ): EventFilter
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    migrate(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    mintFromL1(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'mintFromL1(address,address,address,uint256,bytes,bytes)'(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    withdraw(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'withdraw(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    migrate(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    mintFromL1(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'mintFromL1(address,address,address,uint256,bytes,bytes)'(
      l1ERC20: string,
      sender: string,
      dest: string,
      amount: BigNumberish,
      deployData: BytesLike,
      callHookData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    withdraw(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'withdraw(address,address,address,uint256)'(
      l1ERC20: string,
      sender: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
