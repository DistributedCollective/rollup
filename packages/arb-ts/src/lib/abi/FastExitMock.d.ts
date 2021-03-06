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

interface FastExitMockInterface extends ethers.utils.Interface {
  functions: {
    'requestLiquidity(address,address,uint256,uint256,bytes)': FunctionFragment
    'setFee(uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'requestLiquidity',
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'setFee', values: [BigNumberish]): string

  decodeFunctionResult(
    functionFragment: 'requestLiquidity',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setFee', data: BytesLike): Result

  events: {}
}

export class FastExitMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: FastExitMockInterface

  functions: {
    requestLiquidity(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'requestLiquidity(address,address,uint256,uint256,bytes)'(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setFee(uint256)'(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  requestLiquidity(
    dest: string,
    erc20: string,
    amount: BigNumberish,
    exitNum: BigNumberish,
    liquidityProof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'requestLiquidity(address,address,uint256,uint256,bytes)'(
    dest: string,
    erc20: string,
    amount: BigNumberish,
    exitNum: BigNumberish,
    liquidityProof: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setFee(uint256)'(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    requestLiquidity(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'requestLiquidity(address,address,uint256,uint256,bytes)'(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>

    'setFee(uint256)'(
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    requestLiquidity(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'requestLiquidity(address,address,uint256,uint256,bytes)'(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    setFee(_fee: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'setFee(uint256)'(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    requestLiquidity(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'requestLiquidity(address,address,uint256,uint256,bytes)'(
      dest: string,
      erc20: string,
      amount: BigNumberish,
      exitNum: BigNumberish,
      liquidityProof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setFee(uint256)'(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
