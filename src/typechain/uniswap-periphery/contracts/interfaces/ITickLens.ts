/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../common';

export declare namespace ITickLens {
  export type PopulatedTickStruct = {
    tick: BigNumberish;
    liquidityNet: BigNumberish;
    liquidityGross: BigNumberish;
  };

  export type PopulatedTickStructOutput = [number, BigNumber, BigNumber] & {
    tick: number;
    liquidityNet: BigNumber;
    liquidityGross: BigNumber;
  };
}

export interface ITickLensInterface extends utils.Interface {
  functions: {
    'getPopulatedTicksInWord(address,int16)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'getPopulatedTicksInWord'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getPopulatedTicksInWord',
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: 'getPopulatedTicksInWord',
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITickLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITickLensInterface;

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
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [ITickLens.PopulatedTickStructOutput[]] & {
        populatedTicks: ITickLens.PopulatedTickStructOutput[];
      }
    >;
  };

  getPopulatedTicksInWord(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<ITickLens.PopulatedTickStructOutput[]>;

  callStatic: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<ITickLens.PopulatedTickStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}