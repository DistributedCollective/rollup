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
import { Contract, ContractTransaction } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface RollupCreatorNoProxyInterface extends ethers.utils.Interface {
  functions: {}

  events: {
    'RollupCreated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'RollupCreated'): EventFragment
}

export class RollupCreatorNoProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: RollupCreatorNoProxyInterface

  functions: {}

  callStatic: {}

  filters: {
    RollupCreated(rollupAddress: null): EventFilter
  }

  estimateGas: {}

  populateTransaction: {}
}