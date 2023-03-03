/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { SwapRouter, SwapRouterInterface } from '../SwapRouter';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_WETH9',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'WETH9',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'path',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinimum',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISwapRouter.ExactInputParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInput',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenIn',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenOut',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOutMinimum',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
          },
        ],
        internalType: 'struct ISwapRouter.ExactInputSingleParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactInputSingle',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'path',
            type: 'bytes',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOut',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountInMaximum',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISwapRouter.ExactOutputParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactOutput',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'tokenIn',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenOut',
            type: 'address',
          },
          {
            internalType: 'uint24',
            name: 'fee',
            type: 'uint24',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountOut',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountInMaximum',
            type: 'uint256',
          },
          {
            internalType: 'uint160',
            name: 'sqrtPriceLimitX96',
            type: 'uint160',
          },
        ],
        internalType: 'struct ISwapRouter.ExactOutputSingleParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'exactOutputSingle',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
    ],
    name: 'multicall',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'results',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'selfPermit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'selfPermitAllowed',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'selfPermitAllowedIfNecessary',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'selfPermitIfNecessary',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeBips',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address',
      },
    ],
    name: 'sweepTokenWithFee',
    outputs: [],
    stateMutability: 'payable',
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
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amountMinimum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeBips',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address',
      },
    ],
    name: 'unwrapWETH9WithFee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;

const _bytecode =
  '0x60c06040526000196000553480156200001757600080fd5b506040516200302f3803806200302f8339810160408190526200003a9162000076565b6001600160601b0319606092831b8116608052911b1660a052620000ad565b80516001600160a01b03811681146200007157600080fd5b919050565b6000806040838503121562000089578182fd5b620000948362000059565b9150620000a46020840162000059565b90509250929050565b60805160601c60a05160601c612f26620001096000398061012f528061058352806106ad5280610747528061078752806108b15280611c435280611ca35280611d24525080610dc6528061140c5280611e265250612f266000f3fe6080604052600436106101125760003560e01c8063c04b8d59116100a5578063df2ab5bb11610074578063f28c049811610059578063f28c0498146102f5578063f3995c6714610308578063fa461e331461031b576101bd565b8063df2ab5bb146102cf578063e0e189a0146102e2576101bd565b8063c04b8d5914610281578063c2e3140a14610294578063c45a0155146102a7578063db3e2198146102bc576101bd565b80634aa4a4fc116100e15780634aa4a4fc146102195780639b2c0a371461023b578063a4a78f0c1461024e578063ac9650d814610261576101bd565b806312210e8a146101c2578063414bf389146101ca5780634659a494146101f357806349404b7c14610206576101bd565b366101bd573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b6101bb61033b565b6101dd6101d83660046129f8565b61034d565b6040516101ea9190612df1565b60405180910390f35b6101bb610201366004612776565b6104bf565b6101bb610214366004612aff565b61057f565b34801561022557600080fd5b5061022e610745565b6040516101ea9190612c37565b6101bb610249366004612b2e565b610769565b6101bb61025c366004612776565b610981565b61027461026f3660046127d6565b610a56565b6040516101ea9190612caa565b6101dd61028f36600461294d565b610bb0565b6101bb6102a2366004612776565b610d0f565b3480156102b357600080fd5b5061022e610dc4565b6101dd6102ca3660046129f8565b610de8565b6101bb6102dd3660046126d7565b610f78565b6101bb6102f0366004612718565b611095565b6101dd610303366004612a14565b6111fb565b6101bb610316366004612776565b61132f565b34801561032757600080fd5b506101bb610336366004612868565b6113c7565b471561034b5761034b334761150e565b565b600081608001358061035d61165c565b11156103ca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b61047060a08401356103e260808601606087016126b4565b6103f3610100870160e088016126b4565b604080518082019091528061040b60208a018a6126b4565b61041b60608b0160408c01612adc565b61042b60408c0160208d016126b4565b60405160200161043d93929190612bc1565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff16815250611660565b91508260c001358210156104b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d72565b60405180910390fd5b50919050565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e48101839052905173ffffffffffffffffffffffffffffffffffffffff881691638fcbaf0c9161010480830192600092919082900301818387803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b50505050505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561060857600080fd5b505afa15801561061c573d6000803e3d6000fd5b505050506040513d602081101561063257600080fd5b50519050828110156106a557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b8015610740577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b50505050610740828261150e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008211801561077a575060648211155b61078357600080fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561080c57600080fd5b505afa158015610820573d6000803e3d6000fd5b505050506040513d602081101561083657600080fd5b50519050848110156108a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b801561097a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561092257600080fd5b505af1158015610936573d6000803e3d6000fd5b50505050600061271061095285846117e690919063ffffffff16565b8161095957fe5b049050801561096c5761096c838261150e565b6109788582840361150e565b505b5050505050565b604080517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015290517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015610a1657600080fd5b505afa158015610a2a573d6000803e3d6000fd5b505050506040513d6020811015610a4057600080fd5b50511015610978576109788686868686866104bf565b60608167ffffffffffffffff81118015610a6f57600080fd5b50604051908082528060200260200182016040528015610aa357816020015b6060815260200190600190039081610a8e5790505b50905060005b82811015610ba95760008030868685818110610ac157fe5b9050602002810190610ad39190612dfa565b604051610ae1929190612c27565b600060405180830381855af49150503d8060008114610b1c576040519150601f19603f3d011682016040523d82523d6000602084013e610b21565b606091505b509150915081610b8757604481511015610b3a57600080fd5b60048101905080806020019051810190610b5491906128e3565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b09190612d28565b80848481518110610b9457fe5b60209081029190910101525050600101610aa9565b5092915050565b6000816040015180610bc061165c565b1115610c2d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b335b6000610c3e8560000151611810565b9050610c97856060015182610c57578660200151610c59565b305b60006040518060400160405280610c738b6000015161181c565b81526020018773ffffffffffffffffffffffffffffffffffffffff16815250611660565b60608601528015610cb7578451309250610cb09061182b565b8552610cc4565b8460600151935050610cca565b50610c2f565b8360800151831015610d08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d72565b5050919050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051869173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015610d8457600080fd5b505afa158015610d98573d6000803e3d6000fd5b505050506040513d6020811015610dae57600080fd5b505110156109785761097886868686868661132f565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000816080013580610df861165c565b1115610e6557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b610f0e60a0840135610e7d60808601606087016126b4565b610e8e610100870160e088016126b4565b6040518060400160405280886020016020810190610eac91906126b4565b610ebc60608b0160408c01612adc565b610ec960208c018c6126b4565b604051602001610edb93929190612bc1565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff16815250611860565b91508260c00135821115610f4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d3b565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600055919050565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610fe157600080fd5b505afa158015610ff5573d6000803e3d6000fd5b505050506040513d602081101561100b57600080fd5b505190508281101561107e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b801561108f5761108f848383611a1c565b50505050565b6000821180156110a6575060648211155b6110af57600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561111857600080fd5b505afa15801561112c573d6000803e3d6000fd5b505050506040513d602081101561114257600080fd5b50519050848110156111b557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b80156109785760006127106111ca83866117e6565b816111d157fe5b04905080156111e5576111e5878483611a1c565b6111f28786838503611a1c565b50505050505050565b600081604001358061120b61165c565b111561127857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b6112eb606084013561129060408601602087016126b4565b60408051808201909152600090806112a88980612dfa565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525033602090910152611860565b5060005491508260800135821115610f4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b090612d3b565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c48101839052905173ffffffffffffffffffffffffffffffffffffffff88169163d505accf9160e480830192600092919082900301818387803b15801561055f57600080fd5b60008413806113d65750600083135b6113df57600080fd5b60006113ed82840184612a4c565b905060008060006114018460000151611bf1565b9250925092506114337f0000000000000000000000000000000000000000000000000000000000000000848484611c22565b5060008060008a13611474578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610896114a5565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16108a5b9150915081156114c4576114bf8587602001513384611c41565b610573565b85516114cf90611810565b156114f45785516114df9061182b565b86526114ee8133600089611860565b50610573565b806000819055508394506105738587602001513384611c41565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b6020831061158557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611548565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115e7576040519150601f19603f3d011682016040523d82523d6000602084013e6115ec565b606091505b505090508061074057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b4290565b600073ffffffffffffffffffffffffffffffffffffffff8416611681573093505b60008060006116938560000151611bf1565b9194509250905073ffffffffffffffffffffffffffffffffffffffff808316908416106000806116c4868686611e1f565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856116ea8f611e5d565b73ffffffffffffffffffffffffffffffffffffffff8e161561170c578d611732565b8761172b5773fffd8963efd1fc6a506488495d951d5263988d25611732565b6401000276a45b8d6040516020016117439190612da9565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401611772959493929190612c58565b6040805180830381600087803b15801561178b57600080fd5b505af115801561179f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c39190612845565b91509150826117d257816117d4565b805b6000039b9a5050505050505050505050565b6000821580611801575050818102818382816117fe57fe5b04145b61180a57600080fd5b92915050565b8051604211155b919050565b606061180a826000602b611e8f565b805160609061180a9083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe901611e8f565b600073ffffffffffffffffffffffffffffffffffffffff8416611881573093505b60008060006118938560000151611bf1565b9194509250905073ffffffffffffffffffffffffffffffffffffffff808416908316106000806118c4858786611e1f565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856118ea8f611e5d565b60000373ffffffffffffffffffffffffffffffffffffffff8e161561190f578d611935565b8761192e5773fffd8963efd1fc6a506488495d951d5263988d25611935565b6401000276a45b8d6040516020016119469190612da9565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401611975959493929190612c58565b6040805180830381600087803b15801561198e57600080fd5b505af11580156119a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c69190612845565b915091506000836119db5781836000036119e1565b82826000035b909850905073ffffffffffffffffffffffffffffffffffffffff8a16611a0d578b8114611a0d57600080fd5b50505050505050949350505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b60208310611af157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611ab4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611b53576040519150601f19603f3d011682016040523d82523d6000602084013e611b58565b606091505b5091509150818015611b86575080511580611b865750808060200190516020811015611b8357600080fd5b50515b61097a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60008080611bff8482612076565b9250611c0c846014612176565b9050611c19846017612076565b91509193909250565b6000611c3885611c33868686612266565b6122e3565b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015611c9c5750804710155b15611de5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015611d0957600080fd5b505af1158015611d1d573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611db357600080fd5b505af1158015611dc7573d6000803e3d6000fd5b505050506040513d6020811015611ddd57600080fd5b5061108f9050565b73ffffffffffffffffffffffffffffffffffffffff8316301415611e1357611e0e848383611a1c565b61108f565b61108f84848484612313565b6000611e557f0000000000000000000000000000000000000000000000000000000000000000611e50868686612266565b6124f0565b949350505050565b60007f80000000000000000000000000000000000000000000000000000000000000008210611e8b57600080fd5b5090565b60608182601f011015611f0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b828284011015611f7457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b81830184511015611fe657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b606082158015612005576040519150600082526020820160405261206d565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561203e578051835260209283019201612026565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6000818260140110156120ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561215d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b6000818260030110156121ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561225d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b61226e612626565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1611156122a6579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b60006122ef83836124f0565b90503373ffffffffffffffffffffffffffffffffffffffff82161461180a57600080fd5b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b602083106123f057805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016123b3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612452576040519150601f19603f3d011682016040523d82523d6000602084013e612457565b606091505b5091509150818015612485575080511580612485575080806020019051602081101561248257600080fd5b50515b61097857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff161061253257600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b803561181781612ef4565b600082601f830112612661578081fd5b813561267461266f82612e88565b612e64565b818152846020838601011115612688578283fd5b816020850160208301379081016020019190915292915050565b600061010082840312156104b9578081fd5b6000602082840312156126c5578081fd5b81356126d081612ef4565b9392505050565b6000806000606084860312156126eb578182fd5b83356126f681612ef4565b925060208401359150604084013561270d81612ef4565b809150509250925092565b600080600080600060a0868803121561272f578081fd5b853561273a81612ef4565b945060208601359350604086013561275181612ef4565b925060608601359150608086013561276881612ef4565b809150509295509295909350565b60008060008060008060c0878903121561278e578081fd5b863561279981612ef4565b95506020870135945060408701359350606087013560ff811681146127bc578182fd5b9598949750929560808101359460a0909101359350915050565b600080602083850312156127e8578182fd5b823567ffffffffffffffff808211156127ff578384fd5b818501915085601f830112612812578384fd5b813581811115612820578485fd5b8660208083028501011115612833578485fd5b60209290920196919550909350505050565b60008060408385031215612857578182fd5b505080516020909101519092909150565b6000806000806060858703121561287d578182fd5b8435935060208501359250604085013567ffffffffffffffff808211156128a2578384fd5b818701915087601f8301126128b5578384fd5b8135818111156128c3578485fd5b8860208285010111156128d4578485fd5b95989497505060200194505050565b6000602082840312156128f4578081fd5b815167ffffffffffffffff81111561290a578182fd5b8201601f8101841361291a578182fd5b805161292861266f82612e88565b81815285602083850101111561293c578384fd5b611c38826020830160208601612ec8565b60006020828403121561295e578081fd5b813567ffffffffffffffff80821115612975578283fd5b9083019060a08286031215612988578283fd5b60405160a08101818110838211171561299d57fe5b6040528235828111156129ae578485fd5b6129ba87828601612651565b8252506129c960208401612646565b602082015260408301356040820152606083013560608201526080830135608082015280935050505092915050565b60006101008284031215612a0a578081fd5b6126d083836126a2565b600060208284031215612a25578081fd5b813567ffffffffffffffff811115612a3b578182fd5b820160a081850312156126d0578182fd5b600060208284031215612a5d578081fd5b813567ffffffffffffffff80821115612a74578283fd5b9083019060408286031215612a87578283fd5b604051604081018181108382111715612a9c57fe5b604052823582811115612aad578485fd5b612ab987828601612651565b82525060208301359250612acc83612ef4565b6020810192909252509392505050565b600060208284031215612aed578081fd5b813562ffffff811681146126d0578182fd5b60008060408385031215612b11578182fd5b823591506020830135612b2381612ef4565b809150509250929050565b60008060008060808587031215612b43578182fd5b843593506020850135612b5581612ef4565b9250604085013591506060850135612b6c81612ef4565b939692955090935050565b60008151808452612b8f816020860160208601612ec8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152612c9f60a0830184612b77565b979650505050505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015612d1b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452612d09858351612b77565b94509285019290850190600101612ccf565b5092979650505050505050565b6000602082526126d06020830184612b77565b60208082526012908201527f546f6f206d756368207265717565737465640000000000000000000000000000604082015260600190565b60208082526013908201527f546f6f206c6974746c6520726563656976656400000000000000000000000000604082015260600190565b600060208252825160406020840152612dc56060840182612b77565b905073ffffffffffffffffffffffffffffffffffffffff60208501511660408401528091505092915050565b90815260200190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612e2e578283fd5b83018035915067ffffffffffffffff821115612e48578283fd5b602001915036819003821315612e5d57600080fd5b9250929050565b60405181810167ffffffffffffffff81118282101715612e8057fe5b604052919050565b600067ffffffffffffffff821115612e9c57fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015612ee3578181015183820152602001612ecb565b8381111561108f5750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114612f1657600080fd5b5056fea164736f6c6343000706000a';

type SwapRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapRouter__factory extends ContractFactory {
  constructor(...args: SwapRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapRouter> {
    return super.deploy(
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<SwapRouter>;
  }
  override getDeployTransaction(
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _WETH9, overrides || {});
  }
  override attach(address: string): SwapRouter {
    return super.attach(address) as SwapRouter;
  }
  override connect(signer: Signer): SwapRouter__factory {
    return super.connect(signer) as SwapRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapRouterInterface {
    return new utils.Interface(_abi) as SwapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapRouter {
    return new Contract(address, _abi, signerOrProvider) as SwapRouter;
  }
}
