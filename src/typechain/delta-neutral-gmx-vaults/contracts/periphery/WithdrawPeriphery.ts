/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export interface WithdrawPeripheryInterface extends utils.Interface {
  functions: {
    'owner()': FunctionFragment;
    'redeemToken(address,address,address,uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setAddresses(address,address)': FunctionFragment;
    'setSlippageThreshold(uint256)': FunctionFragment;
    'slippageThreshold()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'withdrawToken(address,address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'owner'
      | 'redeemToken'
      | 'renounceOwnership'
      | 'setAddresses'
      | 'setSlippageThreshold'
      | 'slippageThreshold'
      | 'transferOwnership'
      | 'withdrawToken'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'redeemToken',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setAddresses',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSlippageThreshold',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'slippageThreshold',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawToken',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'redeemToken',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAddresses',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setSlippageThreshold',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'slippageThreshold',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawToken',
    data: BytesLike
  ): Result;

  events: {
    'AddressesUpdated(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SlippageThresholdUpdated(uint256)': EventFragment;
    'TokenRedeemed(address,address,address,uint256,uint256,uint256)': EventFragment;
    'TokenWithdrawn(address,address,address,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AddressesUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SlippageThresholdUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenRedeemed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TokenWithdrawn'): EventFragment;
}

export interface AddressesUpdatedEventObject {
  juniorVault: string;
  rewardRouter: string;
}
export type AddressesUpdatedEvent = TypedEvent<
  [string, string],
  AddressesUpdatedEventObject
>;

export type AddressesUpdatedEventFilter =
  TypedEventFilter<AddressesUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SlippageThresholdUpdatedEventObject {
  newSlippageThreshold: BigNumber;
}
export type SlippageThresholdUpdatedEvent = TypedEvent<
  [BigNumber],
  SlippageThresholdUpdatedEventObject
>;

export type SlippageThresholdUpdatedEventFilter =
  TypedEventFilter<SlippageThresholdUpdatedEvent>;

export interface TokenRedeemedEventObject {
  from: string;
  receiver: string;
  token: string;
  assets: BigNumber;
  shares: BigNumber;
  tokensReceived: BigNumber;
}
export type TokenRedeemedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  TokenRedeemedEventObject
>;

export type TokenRedeemedEventFilter = TypedEventFilter<TokenRedeemedEvent>;

export interface TokenWithdrawnEventObject {
  from: string;
  receiver: string;
  token: string;
  assets: BigNumber;
  shares: BigNumber;
  tokensReceived: BigNumber;
}
export type TokenWithdrawnEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber],
  TokenWithdrawnEventObject
>;

export type TokenWithdrawnEventFilter = TypedEventFilter<TokenWithdrawnEvent>;

export interface WithdrawPeriphery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WithdrawPeripheryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    owner(overrides?: CallOverrides): Promise<[string]>;

    redeemToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sharesAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAddresses(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSlippageThreshold(
      _slippageThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    slippageThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sGlpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  redeemToken(
    from: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    sharesAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAddresses(
    _dnGmxJuniorVault: PromiseOrValue<string>,
    _rewardRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSlippageThreshold(
    _slippageThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  slippageThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    from: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    sGlpAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    redeemToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sharesAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAddresses(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSlippageThreshold(
      _slippageThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    slippageThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sGlpAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'AddressesUpdated(address,address)'(
      juniorVault?: null,
      rewardRouter?: null
    ): AddressesUpdatedEventFilter;
    AddressesUpdated(
      juniorVault?: null,
      rewardRouter?: null
    ): AddressesUpdatedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'SlippageThresholdUpdated(uint256)'(
      newSlippageThreshold?: null
    ): SlippageThresholdUpdatedEventFilter;
    SlippageThresholdUpdated(
      newSlippageThreshold?: null
    ): SlippageThresholdUpdatedEventFilter;

    'TokenRedeemed(address,address,address,uint256,uint256,uint256)'(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      token?: null,
      assets?: null,
      shares?: null,
      tokensReceived?: null
    ): TokenRedeemedEventFilter;
    TokenRedeemed(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      token?: null,
      assets?: null,
      shares?: null,
      tokensReceived?: null
    ): TokenRedeemedEventFilter;

    'TokenWithdrawn(address,address,address,uint256,uint256,uint256)'(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      token?: null,
      assets?: null,
      shares?: null,
      tokensReceived?: null
    ): TokenWithdrawnEventFilter;
    TokenWithdrawn(
      from?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      token?: null,
      assets?: null,
      shares?: null,
      tokensReceived?: null
    ): TokenWithdrawnEventFilter;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    redeemToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sharesAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAddresses(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSlippageThreshold(
      _slippageThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    slippageThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sGlpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sharesAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAddresses(
      _dnGmxJuniorVault: PromiseOrValue<string>,
      _rewardRouter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSlippageThreshold(
      _slippageThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    slippageThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      from: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      sGlpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
