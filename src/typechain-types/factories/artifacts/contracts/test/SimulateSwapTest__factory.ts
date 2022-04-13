/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SimulateSwapTest,
  SimulateSwapTestInterface,
} from '../../../../artifacts/contracts/test/SimulateSwapTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IUniswapV3Pool',
        name: 'vPool_',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'InvalidSqrtPriceLimit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'R',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'clearSwapSteps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extendedFeeGrowthOutsideX128',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fpGlobal',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumAX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpX128',
        type: 'int256',
      },
      {
        internalType: 'uint48',
        name: 'timestampLast',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'simulateSwap1',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'simulateSwap2',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
      {
        components: [
          {
            internalType: 'uint160',
            name: 'sqrtPriceX96Start',
            type: 'uint160',
          },
          {
            internalType: 'int24',
            name: 'tickStart',
            type: 'int24',
          },
          {
            internalType: 'uint8',
            name: 'feeProtocol',
            type: 'uint8',
          },
          {
            internalType: 'uint128',
            name: 'liquidityStart',
            type: 'uint128',
          },
          {
            internalType: 'int24',
            name: 'tickSpacing',
            type: 'int24',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'uint256',
            name: 'value1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value2',
            type: 'uint256',
          },
        ],
        internalType: 'struct SimulateSwap.Cache',
        name: 'cache',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'amountSpecifiedRemaining',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'amountCalculated',
                type: 'int256',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceX96',
                type: 'uint160',
              },
              {
                internalType: 'int24',
                name: 'tick',
                type: 'int24',
              },
              {
                internalType: 'uint256',
                name: 'feeGrowthGlobalIncreaseX128',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'protocolFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
            ],
            internalType: 'struct SimulateSwap.State',
            name: 'state',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'sqrtPriceStartX96',
                type: 'uint160',
              },
              {
                internalType: 'int24',
                name: 'tickNext',
                type: 'int24',
              },
              {
                internalType: 'bool',
                name: 'initialized',
                type: 'bool',
              },
              {
                internalType: 'uint160',
                name: 'sqrtPriceNextX96',
                type: 'uint160',
              },
              {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'feeAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct SimulateSwap.Step',
            name: 'step',
            type: 'tuple',
          },
        ],
        internalType: 'struct SimulateSwapTest.SwapStep[]',
        name: 'steps',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'swapVTokenForVQuote',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint24',
        name: 'fee',
        type: 'uint24',
      },
    ],
    name: 'simulateSwap3',
    outputs: [
      {
        internalType: 'int256',
        name: 'vTokenIn',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'vQuoteIn',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sqrtPrice',
    outputs: [
      {
        internalType: 'uint160',
        name: 'sq',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        internalType: 'int256',
        name: 'amountSpecified',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'int256',
        name: 'amount0',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    name: 'ticksExtended',
    outputs: [
      {
        internalType: 'int256',
        name: 'sumALastX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumBOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'sumFpOutsideX128',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'sumFeeOutsideX128',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'amount0Delta',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'amount1Delta',
        type: 'int256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200327d3803806200327d83398101604081905262000034916200005a565b600080546001600160a01b0319166001600160a01b03929092169190911790556200008c565b6000602082840312156200006d57600080fd5b81516001600160a01b03811681146200008557600080fd5b9392505050565b6131e1806200009c6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063769042d511610076578063bf0f97891161005b578063bf0f9789146101fc578063d750ba341461020f578063fa461e331461021957600080fd5b8063769042d5146101c9578063b83d2683146101dc57600080fd5b806322d03d6d116100a757806322d03d6d1461011757806348aaa8c01461012e5780636c5443351461018357600080fd5b80631274ddd2146100c3578063195cd92c146100ef575b600080fd5b6100d66100d1366004612830565b61022c565b6040516100e6949392919061296c565b60405180910390f35b6101026100fd366004612830565b61049b565b604080519283526020830191909152016100e6565b61012060065481565b6040519081526020016100e6565b61016361013c366004612a1d565b60076020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016100e6565b6002546003546004546005546101a19392919065ffffffffffff1684565b6040805194855260208501939093529183015265ffffffffffff1660608201526080016100e6565b6101026101d7366004612830565b61053b565b6101e4610567565b6040516001600160a01b0390911681526020016100e6565b61010261020a366004612a4b565b6105eb565b610217610706565b005b610217610227366004612a82565b610714565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052819060005460609061028c906001600160a01b0316888888610831610ae9565b6001805460408051602080840282018101909252828152969a509498509196509290915060009084015b8282101561048c57838290600052602060002090600a0201604051806040016040529081600082016040518060e001604052908160008201548152602001600182015481526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160149054906101000a900460020b60020b60020b8152602001600382015481526020016004820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016004820160109054906101000a90046001600160801b03166001600160801b03166001600160801b0316815250508152602001600582016040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460ff161515151581526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282015481526020016003820154815260200160048201548152505081525050815260200190600101906102b6565b50505050905093509350935093565b60008054604080513360208083018290528351808403909101815282840193849052630251596160e31b90935284936001600160a01b03169263128acb08926104ed92918a918a918a91604401612b5a565b60408051808303816000875af115801561050b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052f9190612b94565b91509150935093915050565b600080548190610559906001600160a01b0316868686610831610ae9565b509197909650945050505050565b60008060009054906101000a90046001600160a01b03166001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa1580156105bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105df9190612bd5565b50949695505050505050565b604080516101008101825260008082526020808301829052828401829052606083018290526080830182905260c0830182905260e0830182905262ffffff851660a0840152815484516334324e9f60e21b8152945192948594936001600160a01b039092169263d0c93a7c926004808401938290030181865afa158015610676573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069a9190612c6d565b60020b60808201526106f88686816106d0576106cb600173fffd8963efd1fc6a506488495d951d5263988d26612ca0565b6106e0565b6106e06401000276a36001612cc8565b6000546001600160a01b031692919085610831610b85565b509097909650945050505050565b61071260016000612740565b565b6000546001600160a01b0316331461072b57600080fd5b600061073982840184612cf3565b905060008513156107cd5760005460408051630dfe168160e01b815290516107cd9284926001600160a01b039091169189918391630dfe1681916004808201926020929091908290030181865afa158015610798573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bc9190612d10565b6001600160a01b031692919061133d565b600084131561082a576000546040805163d21220a760e01b8152905161082a9284926001600160a01b03909116918891839163d21220a7916004808201926020929091908290030181865afa158015610798573d6000803e3d6000fd5b5050505050565b604080518082018252928352602080840192835260018054808201825560009190915293518051600a9095027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810195909555808201517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7860155808301517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf88601805460608085015162ffffff9081167401000000000000000000000000000000000000000090810276ffffffffffffffffffffffffffffffffffffffffffffff199485166001600160a01b0397881617179094556080808701517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98c015560a08088015160c0988901516001600160801b03908116600160801b029116177fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8d0155995180517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfb8d0180549a8301519b830151151577010000000000000000000000000000000000000000000000027fffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffff9c9095169097029990951694871694909417979097179790971696909617909155938401517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfc870180549190921673ffffffffffffffffffffffffffffffffffffffff1991909116179055908201517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfd850155918101517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfe84015501517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cff909101555050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905281906040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152610b7289898989858a610b85565b919b909a50909850909650945050505050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052819086600003610be057604051631f2a200560e01b815260040160405180910390fd5b84516001600160a01b0316600003610c7457886001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c549190612bd5565b5060ff1660408b015250505060020b60208701526001600160a01b031685525b84606001516001600160801b0316600003610cfa57886001600160a01b0316631a6865026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb9190612d44565b6001600160801b031660608601525b846080015160020b600003610de757886001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6b9190612d5f565b62ffffff1660a0860152604080516334324e9f60e21b815290516001600160a01b038b169163d0c93a7c9160048083019260209291908290030181865afa158015610dba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dde9190612c6d565b60020b60808601525b87610e315784600001516001600160a01b0316866001600160a01b03161080610e2c575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038716115b610e62565b84600001516001600160a01b0316866001600160a01b03161180610e6257506401000276a36001600160a01b038716105b15610e90576040516328da8b5760e11b81526001600160a01b03871660048201526024015b60405180910390fd5b600080881390506040518060e001604052808981526020016000815260200187600001516001600160a01b03168152602001876020015160020b81526020016000815260200160006001600160801b0316815260200187606001516001600160801b031681525091505b815115801590610f205750866001600160a01b031682604001516001600160a01b031614155b156112f7576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260408301516001600160a01b03908116825260608401516080890151610f8d928e1691635339c296918e6113b2565b1515604083015260020b60208201819052620d89e7191315610fb857620d89e7196020820152610fec565b610fc5620d89e719612d7c565b60020b816020015160020b1315610fec57610fe3620d89e719612d7c565b60020b60208201525b610ff9816020015161161e565b6001600160a01b03166060820152604083015161106e908b61103357896001600160a01b031683606001516001600160a01b03161161104d565b896001600160a01b031683606001516001600160a01b0316105b61105b57826060015161105d565b895b60c0860151865160a08c0151611941565b60c085015260a084015260808301526001600160a01b0316604084015281156110e6576110ad8160c0015182608001516110a89190612d9e565b611b33565b835184906110bc908390612db6565b90525060a08101516110cd90611b33565b83602001516110dc9190612db6565b6020840152611131565b6110f38160a00151611b33565b83518490611102908390612df5565b90525060c0810151608082015161111c916110a891612d9e565b836020015161112b9190612df5565b60208401525b60c08301516001600160801b031615611179576111648160c00151600160801b8560c001516001600160801b0316611b49565b836080018181516111759190612d9e565b9052505b6111898a8885848a63ffffffff16565b80606001516001600160a01b031683604001516001600160a01b0316036112ba5780604001511561128d57602081015160405163f30dba9360e01b815260029190910b60048201526000906001600160a01b038d169063f30dba939060240161010060405180830381865afa158015611206573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122a9190612e35565b5050505050509150508a156112455761124281612edf565b90505b600081600f0b1261126557808460c001516112609190612f05565b61127d565b61126e81612edf565b8460c0015161127d9190612f27565b6001600160801b031660c0850152505b8961129c5780602001516112ad565b600181602001516112ad9190612f47565b60020b60608401526112f1565b80600001516001600160a01b031683604001516001600160a01b0316146112f1576112e88360400151611bfc565b60020b60608401525b50610efa565b801515891515146113185760208201518251611313908a612db6565b61132a565b81516113249089612db6565b82602001515b909b909a50919850909650505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b1790526113ac908590611f0f565b50505050565b600080806113c08587612fa5565b905060008660020b1280156113e057506113da8587612fdf565b60020b15155b156113f357806113ef81613001565b9150505b83156114f85760008061140583611ff9565b90925090506000600160ff831681901b906114209082613024565b61142a9190612d9e565b90506000818c8c866040518263ffffffff1660e01b8152600401611457919060019190910b815260200190565b602060405180830381865afa158015611474573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611498919061303b565b1680151596509050856114c257886114b360ff851687612f47565b6114bd9190613054565b6114ed565b886114cc82612016565b6114d690856130e1565b6114e39060ff1687612f47565b6114ed9190613054565b965050505050611613565b60008061150e611509846001613104565b611ff9565b90925090506000611526600160ff841681901b613024565b1990506000818c8c866040518263ffffffff1660e01b8152600401611554919060019190910b815260200190565b602060405180830381865afa158015611571573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611595919061303b565b1680151596509050856115d557886115ae8460ff6130e1565b60ff166115bc876001613104565b6115c69190613104565b6115d09190613054565b61160c565b88836115e0836120b7565b6115ea91906130e1565b60ff166115f8876001613104565b6116029190613104565b61160c9190613054565b9650505050505b509550959350505050565b60008060008360020b12611635578260020b61163d565b8260020b6000035b9050620d89e8811115611663576040516315e4079d60e11b815260040160405180910390fd5b60008160011660000361167a57600160801b61168c565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156116c0576ffff97272373d413259a46990580e213a0260801c5b60048216156116df576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156116fe576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561171d576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561173c576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561175b576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561177a576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561179a576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156117ba576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156117da576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156117fa576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161561181a576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561183a576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561185a576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561187a576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561189b576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156118bb576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156118da576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156118f7576b048a170391f7dc42444e8fa20260801c5b60008460020b131561191857806000198161191457611914612f8f565b0490505b64010000000081061561192c57600161192f565b60005b60ff16602082901c0192505050919050565b60008080806001600160a01b03808916908a1610158187128015906119c657600061197a8989620f42400362ffffff16620f4240611b49565b9050826119935761198e8c8c8c60016121a1565b6119a0565b6119a08b8d8c600161221c565b95508581106119b1578a96506119c0565b6119bd8c8b83866122e5565b96505b50611a10565b816119dd576119d88b8b8b600061221c565b6119ea565b6119ea8a8c8b60006121a1565b93508388600003106119fe57899550611a10565b611a0d8b8a8a60000385612331565b95505b6001600160a01b038a8116908716148215611a7357808015611a2f5750815b611a4557611a40878d8c600161221c565b611a47565b855b9550808015611a54575081155b611a6a57611a65878d8c60006121a1565b611a6c565b845b9450611abd565b808015611a7d5750815b611a9357611a8e8c888c60016121a1565b611a95565b855b9550808015611aa2575081155b611ab857611ab38c888c600061221c565b611aba565b845b94505b81158015611acd57508860000385115b15611ad9578860000394505b818015611af857508a6001600160a01b0316876001600160a01b031614155b15611b07578589039350611b24565b611b21868962ffffff168a620f42400362ffffff1661237d565b93505b50505095509550955095915050565b6000600160ff1b8210611b4557600080fd5b5090565b6000808060001985870985870292508281108382030391505080600003611b825760008411611b7757600080fd5b508290049050611bf5565b808411611b8e57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b60006401000276a36001600160a01b03831610801590611c38575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b611c55576040516324c070df60e11b815260040160405180910390fd5b77ffffffffffffffffffffffffffffffffffffffff00000000602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110611cf657607f810383901c9150611d00565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b14611f0057886001600160a01b0316611ee58261161e565b6001600160a01b03161115611efa5781611f02565b80611f02565b815b9998505050505050505050565b6000611f64826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166123bd9092919063ffffffff16565b805190915015611ff45780806020019051810190611f82919061314b565b611ff45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e87565b505050565b600281900b60081d600061200f61010084612fdf565b9050915091565b600080821161202457600080fd5b600160801b821061203757608091821c91015b68010000000000000000821061204f57604091821c91015b640100000000821061206357602091821c91015b62010000821061207557601091821c91015b610100821061208657600891821c91015b6010821061209657600491821c91015b600482106120a657600291821c91015b600282106120b2576001015b919050565b60008082116120c557600080fd5b5060ff6001600160801b038216156120e057607f19016120e8565b608082901c91505b67ffffffffffffffff82161561210157603f1901612109565b604082901c91505b63ffffffff82161561211e57601f1901612126565b602082901c91505b61ffff82161561213957600f1901612141565b601082901c91505b60ff821615612153576007190161215b565b600882901c91505b600f82161561216d5760031901612175565b600482901c91505b6003821615612187576001190161218f565b600282901c91505b60018216156120b25760001901919050565b6000836001600160a01b0316856001600160a01b031611156121c1579293925b816121ee576121e9836001600160801b03168686036001600160a01b0316600160601b611b49565b612211565b612211836001600160801b03168686036001600160a01b0316600160601b61237d565b90505b949350505050565b6000836001600160a01b0316856001600160a01b0316111561223c579293925b7bffffffffffffffffffffffffffffffff000000000000000000000000606084901b166001600160a01b03868603811690871661227857600080fd5b836122ae57866001600160a01b031661229b8383896001600160a01b0316611b49565b816122a8576122a8612f8f565b046122da565b6122da6122c58383896001600160a01b031661237d565b886001600160a01b0316808204910615150190565b979650505050505050565b600080856001600160a01b0316116122fc57600080fd5b6000846001600160801b03161161231257600080fd5b81612324576121e985858560016123cc565b61221185858560016124b2565b600080856001600160a01b03161161234857600080fd5b6000846001600160801b03161161235e57600080fd5b81612370576121e985858560006124b2565b61221185858560006123cc565b600061238a848484611b49565b90506000828061239c5761239c612f8f565b8486091115611bf55760001981106123b357600080fd5b6001019392505050565b606061221484846000856125b4565b6000811561243e5760006001600160a01b03841115612402576123fd84600160601b876001600160801b0316611b49565b612419565b6124196001600160801b038616606086901b613168565b9050612436612431826001600160a01b038916612d9e565b6126f1565b915050612214565b60006001600160a01b0384111561246c5761246784600160601b876001600160801b031661237d565b612489565b612489606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116124a057600080fd5b6001600160a01b038616039050612214565b6000826000036124c3575083612214565b7bffffffffffffffffffffffffffffffff000000000000000000000000606085901b168215612567576001600160a01b0386168481029085828161250957612509612f8f565b0403612539578181018281106125375761252d83896001600160a01b03168361237d565b9350505050612214565b505b5061243681856125526001600160a01b038a1683613168565b61255c9190612d9e565b808204910615150190565b6001600160a01b0386168481029085828161258457612584612f8f565b0414801561259157508082115b61259a57600080fd5b80820361252d612431846001600160a01b038b168461237d565b60608247101561262c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e87565b6001600160a01b0385163b6126835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e87565b600080866001600160a01b0316858760405161269f919061317c565b60006040518083038185875af1925050503d80600081146126dc576040519150601f19603f3d011682016040523d82523d6000602084013e6126e1565b606091505b50915091506122da828286612707565b806001600160a01b03811681146120b257600080fd5b60608315612716575081611bf5565b8251156127265782518084602001fd5b8160405162461bcd60e51b8152600401610e879190613198565b50805460008255600a02906000526020600020908101906127619190612764565b50565b5b80821115611b455760008082556001820181905560028201805476ffffffffffffffffffffffffffffffffffffffffffffff1916905560038201819055600482018190556005820180547fffffffffffffffff00000000000000000000000000000000000000000000000016905560068201805473ffffffffffffffffffffffffffffffffffffffff1916905560078201819055600882018190556009820155600a01612765565b801515811461276157600080fd5b6001600160a01b038116811461276157600080fd5b60008060006060848603121561284557600080fd5b83356128508161280d565b92506020840135915060408401356128678161281b565b809150509250925092565b600081518084526020808501945080840160005b8381101561296157815180518051895284810151858a01526040808201516001600160a01b0316908a015260608082015160020b908a0152608080820151908a015260a0808201516001600160801b03908116918b019190915260c091820151169089015283015161294c60e08901826001600160a01b03808251168352602082015160020b6020840152604082015115156040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c08301525050565b506101c0969096019590820190600101612886565b509495945050505050565b60006101608683528560208401526001600160a01b038551166040840152602085015160020b606084015260ff604086015116608084015260608501516129be60a08501826001600160801b03169052565b5060808501516129d360c085018260020b9052565b5060a085015162ffffff811660e08501525060c085015161010084015260e0850151610120840152806101408401526122da81840185612872565b8060020b811461276157600080fd5b600060208284031215612a2f57600080fd5b8135611bf581612a0e565b62ffffff8116811461276157600080fd5b600080600060608486031215612a6057600080fd5b8335612a6b8161280d565b925060208401359150604084013561286781612a3a565b60008060008060608587031215612a9857600080fd5b8435935060208501359250604085013567ffffffffffffffff80821115612abe57600080fd5b818701915087601f830112612ad257600080fd5b813581811115612ae157600080fd5b886020828501011115612af357600080fd5b95989497505060200194505050565b60005b83811015612b1d578181015183820152602001612b05565b838111156113ac5750506000910152565b60008151808452612b46816020860160208601612b02565b601f01601f19169290920160200192915050565b60006001600160a01b038088168352861515602084015285604084015280851660608401525060a060808301526122da60a0830184612b2e565b60008060408385031215612ba757600080fd5b505080516020909101519092909150565b805161ffff811681146120b257600080fd5b80516120b28161280d565b600080600080600080600060e0888a031215612bf057600080fd5b8751612bfb8161281b565b6020890151909750612c0c81612a0e565b9550612c1a60408901612bb8565b9450612c2860608901612bb8565b9350612c3660808901612bb8565b925060a088015160ff81168114612c4c57600080fd5b60c0890151909250612c5d8161280d565b8091505092959891949750929550565b600060208284031215612c7f57600080fd5b8151611bf581612a0e565b634e487b7160e01b600052601160045260246000fd5b60006001600160a01b0383811690831681811015612cc057612cc0612c8a565b039392505050565b60006001600160a01b03808316818516808303821115612cea57612cea612c8a565b01949350505050565b600060208284031215612d0557600080fd5b8135611bf58161281b565b600060208284031215612d2257600080fd5b8151611bf58161281b565b80516001600160801b03811681146120b257600080fd5b600060208284031215612d5657600080fd5b611bf582612d2d565b600060208284031215612d7157600080fd5b8151611bf581612a3a565b60008160020b627fffff198103612d9557612d95612c8a565b60000392915050565b60008219821115612db157612db1612c8a565b500190565b60008083128015600160ff1b850184121615612dd457612dd4612c8a565b836001600160ff1b03018313811615612def57612def612c8a565b50500390565b6000808212826001600160ff1b0303841381151615612e1657612e16612c8a565b600160ff1b8390038412811615612e2f57612e2f612c8a565b50500190565b600080600080600080600080610100898b031215612e5257600080fd5b612e5b89612d2d565b9750602089015180600f0b8114612e7157600080fd5b80975050604089015195506060890151945060808901518060060b8114612e9757600080fd5b60a08a0151909450612ea88161281b565b60c08a015190935063ffffffff81168114612ec257600080fd5b9150612ed060e08a01612bca565b90509295985092959890939650565b600081600f0b6f7fffffffffffffffffffffffffffffff198103612d9557612d95612c8a565b60006001600160801b03808316818516808303821115612cea57612cea612c8a565b60006001600160801b0383811690831681811015612cc057612cc0612c8a565b60008160020b8360020b6000811281627fffff1901831281151615612f6e57612f6e612c8a565b81627fffff018313811615612f8557612f85612c8a565b5090039392505050565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b80612fbc57612fbc612f8f565b627fffff19821460001982141615612fd657612fd6612c8a565b90059392505050565b60008260020b80612ff257612ff2612f8f565b808360020b0791505092915050565b60008160020b627fffff19810361301a5761301a612c8a565b6000190192915050565b60008282101561303657613036612c8a565b500390565b60006020828403121561304d57600080fd5b5051919050565b60008160020b8360020b627fffff60008213600084138383048511828216161561308057613080612c8a565b627fffff19600085128281168783058712161561309f5761309f612c8a565b600087129250858205871284841616156130bb576130bb612c8a565b858505871281841616156130d1576130d1612c8a565b5050509290910295945050505050565b600060ff821660ff8416808210156130fb576130fb612c8a565b90039392505050565b60008160020b8360020b6000821282627fffff0382138115161561312a5761312a612c8a565b82627fffff1903821281161561314257613142612c8a565b50019392505050565b60006020828403121561315d57600080fd5b8151611bf58161280d565b60008261317757613177612f8f565b500490565b6000825161318e818460208701612b02565b9190910192915050565b602081526000611bf56020830184612b2e56fea26469706673582212205d8aabd911a06aed668795cbe774af605d37c18b14470eb17a371151ecfef2cd64736f6c634300080d0033';

type SimulateSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimulateSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimulateSwapTest__factory extends ContractFactory {
  constructor(...args: SimulateSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vPool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimulateSwapTest> {
    return super.deploy(vPool_, overrides || {}) as Promise<SimulateSwapTest>;
  }
  override getDeployTransaction(
    vPool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(vPool_, overrides || {});
  }
  override attach(address: string): SimulateSwapTest {
    return super.attach(address) as SimulateSwapTest;
  }
  override connect(signer: Signer): SimulateSwapTest__factory {
    return super.connect(signer) as SimulateSwapTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulateSwapTestInterface {
    return new utils.Interface(_abi) as SimulateSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimulateSwapTest {
    return new Contract(address, _abi, signerOrProvider) as SimulateSwapTest;
  }
}
