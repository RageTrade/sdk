/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { SwapSimulator, SwapSimulatorInterface } from '../SwapSimulator';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IClearingHouse',
        name: 'clearingHouse',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'poolId',
        type: 'uint32',
      },
      {
        internalType: 'int256',
        name: 'amount',
        type: 'int256',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
      },
      {
        internalType: 'bool',
        name: 'isNotional',
        type: 'bool',
      },
    ],
    name: 'simulateSwap',
    outputs: [
      {
        components: [
          {
            internalType: 'int256',
            name: 'amountSpecified',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vTokenIn',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'vBaseIn',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidityFees',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFees',
            type: 'uint256',
          },
        ],
        internalType: 'struct IClearingHouseStructures.SwapValues',
        name: 'swapValues',
        type: 'tuple',
      },
      {
        internalType: 'uint160',
        name: 'sqrtPriceX96End',
        type: 'uint160',
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
        ],
        internalType: 'struct SimulateSwap.SwapCache',
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
            internalType: 'struct SimulateSwap.SwapState',
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
            internalType: 'struct SimulateSwap.StepComputations',
            name: 'step',
            type: 'tuple',
          },
        ],
        internalType: 'struct SwapSimulator.SwapStep[]',
        name: 'steps',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061311b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fbdeddde14610030575b600080fd5b61004361003e366004612741565b61005c565b60405161005394939291906128a2565b60405180910390f35b61008e6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260606100e8898960008a12886100dd576100d88b612962565b6100df565b8a5b8a6103ae6106b9565b6040805160c081018252600080546001600160a01b0381168352600160a01b8104600290810b602080860191909152600160b81b90920460ff16848601526001546001600160801b0381166060860152600160801b8104820b6080860152600160981b900462ffffff1660a085015280548551818402810184019096528086529599509296509293919284015b8282101561034b57838290600052602060002090600a0201604051806040016040529081600082016040518060e001604052908160008201548152602001600182015481526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160149054906101000a900460020b60020b60020b8152602001600382015481526020016004820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016004820160109054906101000a90046001600160801b03166001600160801b03166001600160801b0316815250508152602001600582016040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460ff161515151581526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201548152602001600382015481526020016004820154815250508152505081526020019060010190610175565b5050600354600080546001600160c01b0319168155600180546001600160b01b03191690556001600160a01b03909116965092935061038f92600292509050612670565b600380546001600160a01b031916905592989197509550909350915050565b826000808201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160176101000a81548160ff021916908360ff16021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160010160106101000a81548162ffffff021916908360020b62ffffff16021790555060a08201518160010160136101000a81548162ffffff021916908362ffffff160217905550905050600260405180604001604052808481526020018381525090806001815401808255809150506001900390600052602060002090600a0201600090919091909150600082015181600001600082015181600001556020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160020160146101000a81548162ffffff021916908360020b62ffffff1602179055506080820151816003015560a08201518160040160006101000a8154816001600160801b0302191690836001600160801b0316021790555060c08201518160040160106101000a8154816001600160801b0302191690836001600160801b03160217905550505060208201518160050160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160176101000a81548160ff02191690831515021790555060608201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816002015560a0820151816003015560c08201518160040155505050508160400151600360006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050505050565b6106eb6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b838152604051635b3876a960e11b815263ffffffff871660048201526000906001600160a01b0389169063b670ed529060240161012060405180830381865afa15801561073c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076091906129f9565b905060008512156001600160a01b0385166107b1578661079e57610799600173fffd8963efd1fc6a506488495d951d5263988d26612adf565b6107ae565b6107ae6401000276a36001612b07565b94505b600080600084602001516001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081c9190612b32565b85604001516001600160a01b03166386c8e9a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561085e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108829190612b32565b86604001516001600160a01b031663fca6fbf26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e89190612b32565b9250925092506108fc848b8585858b61093e565b6020850151610917906001600160a01b03168b8b8b8b6109e9565b6040880152602087015261092f848b8585858b610a69565b50505050509695505050505050565b851561099f57841561095d5780516109569085610b79565b81526109e1565b805161096c9060028585610bc4565b6080830181905260608301829052825161099292909161098b91612b57565b6001610cf1565b8082526109569085610b79565b846109a9576109e1565b80516109b89060018585610bc4565b608083018190526060830182905282516109de9290916109d791612b57565b6000610cf1565b81525b505050505050565b600080610a5b878787878b6001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190612b32565b88610d36565b915091509550959350505050565b8515610af3578415610ac657610a8381602001518561145f565b60208201526040810151610a9a9060008585610bc4565b60808301819052606083018290526040830151610abc92909161098b91612b57565b60408201526109e1565b610ad481604001518561145f565b6040820181905260808201516060830151610abc92916109d791612b57565b84610b3c57610b0681604001518561145f565b60408201819052610b1a9060008585610bc4565b60808301819052606083018290526040830151610abc9290916109d791612b57565b610b4a81602001518561145f565b6020820152604081015160808201516060830151610b6c929161098b91612b57565b6040820152505050505050565b600080610b8983620f4240612b6f565b60020b610b9b62ffffff851686612b8b565b610ba59190612c26565b610bb0906001612c54565b9050610bbc8185612c54565b949350505050565b6000806000610bd287611486565b90506001866002811115610be857610be8612c95565b1415610c295783610bfc86620f4240612b6f565b610c069190612b6f565b62ffffff16610c1882620f4240612cab565b610c229190612cca565b9050610c7a565b6002866002811115610c3d57610c3d612c95565b1415610c7a5783610c5186620f4240612cde565b610c5b9190612cde565b62ffffff16610c6d82620f4240612cab565b610c779190612cca565b90505b6000620f4240610c8a8688612cde565b610c999062ffffff1684612cab565b610ca39190612cca565b610cae906001612b57565b9050620f4240610cc362ffffff881684612cab565b610ccd9190612cca565b610cd8906001612b57565b9350610ce48482612cfc565b9250505094509492505050565b600080826001811115610d0657610d06612c95565b14600085131415610d2257610d1b8385612c54565b9050610d2f565b610d2c8385612d13565b90505b9392505050565b60008085610d705760405162461bcd60e51b8152602060048201526002602482015261415360f01b60448201526064015b60405180910390fd5b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152886001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610de0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e049190612d64565b5060ff1660408088019190915260029490940b6020808801919091526001600160a01b0395861687528451630d34328160e11b81529451958f1695631a68650295600480820196509294509092508290030181865afa158015610e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8f9190612e10565b6001600160801b03166060820152604080516334324e9f60e21b815290516001600160a01b038b169163d0c93a7c9160048083019260209291908290030181865afa158015610ee2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f069190612e2b565b60020b608082015262ffffff851660a082015287610f645780600001516001600160a01b0316866001600160a01b0316118015610f5f575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038716105b610f96565b80600001516001600160a01b0316866001600160a01b0316108015610f9657506401000276a36001600160a01b038716115b610fc85760405162461bcd60e51b815260206004820152600360248201526214d41360ea1b6044820152606401610d67565b6000808813905060006040518060e001604052808a81526020016000815260200184600001516001600160a01b03168152602001846020015160020b81526020016000815260200160006001600160801b0316815260200184606001516001600160801b031681525090505b80511580159061105a5750876001600160a01b031681604001516001600160a01b031614155b1561141a576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260408201516001600160a01b039081168252606083015160808601516110c7928f1691635339c296918f6114a5565b1515604083015260020b60208201819052620d89e71913156110f257620d89e7196020820152611126565b6110ff620d89e719612e46565b60020b816020015160020b13156111265761111d620d89e719612e46565b60020b60208201525b6111338160200151611711565b6001600160a01b0316606082015260408201516111a8908c61116d578a6001600160a01b031683606001516001600160a01b031611611187565b8a6001600160a01b031683606001516001600160a01b0316105b611195578260600151611197565b8a5b60c0850151855160a0890151611a44565b60c085015260a084015260808301526001600160a01b031660408301528215611220576111e78160c0015182608001516111e29190612b57565b611c36565b825183906111f6908390612d13565b90525060a081015161120790611c36565b82602001516112169190612d13565b602083015261126b565b61122d8160a00151611c36565b8251839061123c908390612c54565b90525060c08101516080820151611256916111e291612b57565b82602001516112659190612c54565b60208301525b60c08201516001600160801b0316156112b35761129e8160c00151600160801b8460c001516001600160801b0316611c48565b826080018181516112af9190612b57565b9052505b63ffffffff611cf68116908816146112d5576112d58b8584848b63ffffffff16565b80606001516001600160a01b031682604001516001600160a01b031614156113dd578060400151156113b057602081015160405163f30dba9360e01b815260029190910b60048201526000906001600160a01b038e169063f30dba939060240161010060405180830381865afa158015611353573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113779190612e69565b5050505050509150508b156113925761138f81612f0f565b90505b6113a08360c0015182611cfc565b6001600160801b031660c0840152505b8a6113bf5780602001516113d0565b600181602001516113d09190612f36565b60020b6060830152611414565b80600001516001600160a01b031682604001516001600160a01b0316146114145761140b8260400151611d99565b60020b60608301525b50611034565b8115158a15151461143b5760208101518151611436908b612d13565b61144d565b8051611447908a612d13565b81602001515b94509450505050965096945050505050565b6000620f424061146f8382612b6f565b61147c9060020b85612b8b565b610d2f9190612c26565b600080821361149d5761149882612962565b61149f565b815b92915050565b600080806114b38587612f7e565b905060008660020b1280156114d357506114cd8587612fb8565b60020b15155b156114e657806114e281612fda565b9150505b83156115eb576000806114f8836120b2565b90925090506000600160ff831681901b906115139082612cfc565b61151d9190612b57565b90506000818c8c866040518263ffffffff1660e01b815260040161154a919060019190910b815260200190565b602060405180830381865afa158015611567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158b9190612ffe565b1680151596509050856115b557886115a660ff851687612f36565b6115b09190613017565b6115e0565b886115bf826120cf565b6115c990856130a4565b6115d69060ff1687612f36565b6115e09190613017565b965050505050611706565b6000806116016115fc8460016130c7565b6120b2565b90925090506000611619600160ff841681901b612cfc565b1990506000818c8c866040518263ffffffff1660e01b8152600401611647919060019190910b815260200190565b602060405180830381865afa158015611664573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116889190612ffe565b1680151596509050856116c857886116a18460ff6130a4565b60ff166116af8760016130c7565b6116b991906130c7565b6116c39190613017565b6116ff565b88836116d383612170565b6116dd91906130a4565b60ff166116eb8760016130c7565b6116f591906130c7565b6116ff9190613017565b9650505050505b509550959350505050565b60008060008360020b12611728578260020b611730565b8260020b6000035b9050620d89e88111156117695760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610d67565b60006001821661177d57600160801b61178f565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156117c3576ffff97272373d413259a46990580e213a0260801c5b60048216156117e2576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611801576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611820576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561183f576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561185e576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561187d576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561189d576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156118bd576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156118dd576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156118fd576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161561191d576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561193d576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561195d576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561197d576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561199e576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156119be576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156119dd576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156119fa576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611a1b578060001981611a1757611a17612c10565b0490505b640100000000810615611a2f576001611a32565b60005b60ff16602082901c0192505050919050565b60008080806001600160a01b03808916908a161015818712801590611ac9576000611a7d8989620f42400362ffffff16620f4240611c48565b905082611a9657611a918c8c8c600161225a565b611aa3565b611aa38b8d8c60016122d3565b9550858110611ab4578a9650611ac3565b611ac08c8b838661238a565b96505b50611b13565b81611ae057611adb8b8b8b60006122d3565b611aed565b611aed8a8c8b600061225a565b9350838860000310611b0157899550611b13565b611b108b8a8a600003856123d6565b95505b6001600160a01b038a8116908716148215611b7657808015611b325750815b611b4857611b43878d8c60016122d3565b611b4a565b855b9550808015611b57575081155b611b6d57611b68878d8c600061225a565b611b6f565b845b9450611bc0565b808015611b805750815b611b9657611b918c888c600161225a565b611b98565b855b9550808015611ba5575081155b611bbb57611bb68c888c60006122d3565b611bbd565b845b94505b81158015611bd057508860000385115b15611bdc578860000394505b818015611bfb57508a6001600160a01b0316876001600160a01b031614155b15611c0a578589039350611c27565b611c24868962ffffff168a620f42400362ffffff16612422565b93505b50505095509550955095915050565b6000600160ff1b821061149d57600080fd5b600080806000198587098587029250828110838203039150508060001415611c825760008411611c7757600080fd5b508290049050610d2f565b808411611c8e57600080fd5b600084868809851960019081018716968790046003810260029081188083028203028083028203028083028203028083028203028083028203029182029003026000889003889004909101858311909403939093029303949094049190911702949350505050565b50505050565b60008082600f0b1215611d4d57508082016001600160801b03808416908216106114985760405162461bcd60e51b81526020600482015260026024820152614c5360f01b6044820152606401610d67565b826001600160801b03168284019150816001600160801b0316101561149f5760405162461bcd60e51b81526020600482015260026024820152614c4160f01b6044820152606401610d67565b60006401000276a36001600160a01b03831610801590611dd5575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b611e055760405162461bcd60e51b81526020600482015260016024820152602960f91b6044820152606401610d67565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110611e9957607f810383901c9150611ea3565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b146120a357886001600160a01b031661208882611711565b6001600160a01b0316111561209d57816120a5565b806120a5565b815b9998505050505050505050565b600281900b60081d60006120c861010084612fb8565b9050915091565b60008082116120dd57600080fd5b600160801b82106120f057608091821c91015b68010000000000000000821061210857604091821c91015b640100000000821061211c57602091821c91015b62010000821061212e57601091821c91015b610100821061213f57600891821c91015b6010821061214f57600491821c91015b6004821061215f57600291821c91015b6002821061216b576001015b919050565b600080821161217e57600080fd5b5060ff6001600160801b0382161561219957607f19016121a1565b608082901c91505b67ffffffffffffffff8216156121ba57603f19016121c2565b604082901c91505b63ffffffff8216156121d757601f19016121df565b602082901c91505b61ffff8216156121f257600f19016121fa565b601082901c91505b60ff82161561220c5760071901612214565b600882901c91505b600f821615612226576003190161222e565b600482901c91505b60038216156122405760011901612248565b600282901c91505b600182161561216b5760001901919050565b6000836001600160a01b0316856001600160a01b0316111561227a579293925b816122a7576122a2836001600160801b03168686036001600160a01b0316600160601b611c48565b6122ca565b6122ca836001600160801b03168686036001600160a01b0316600160601b612422565b95945050505050565b6000836001600160a01b0316856001600160a01b031611156122f3579293925b600160601b600160e01b03606084901b166001600160a01b03868603811690871661231d57600080fd5b8361235357866001600160a01b03166123408383896001600160a01b0316611c48565b8161234d5761234d612c10565b0461237f565b61237f61236a8383896001600160a01b0316612422565b886001600160a01b0316808204910615150190565b979650505050505050565b600080856001600160a01b0316116123a157600080fd5b6000846001600160801b0316116123b757600080fd5b816123c9576122a28585856001612462565b6122ca858585600161254f565b600080856001600160a01b0316116123ed57600080fd5b6000846001600160801b03161161240357600080fd5b81612415576122a2858585600061254f565b6122ca8585856000612462565b600061242f848484611c48565b90506000828061244157612441612c10565b8486091115610d2f57600019811061245857600080fd5b6001019392505050565b600081156124db5760006001600160a01b038411156124985761249384600160601b876001600160801b0316611c48565b6124b6565b6001600160801b038516606085901b816124b4576124b4612c10565b045b90506124d36124ce6001600160a01b0388168361264a565b61265a565b915050610bbc565b60006001600160a01b038411156125095761250484600160601b876001600160801b0316612422565b612526565b612526606085901b6001600160801b038716808204910615150190565b905080866001600160a01b03161161253d57600080fd5b6001600160a01b038616039050610bbc565b60008261255d575083610bbc565b600160601b600160e01b03606085901b1682156125fd576001600160a01b0386168481029085828161259157612591612c10565b0414156125c2578181018281106125c0576125b683896001600160a01b031683612422565b9350505050610bbc565b505b6125f4826125e9878a6001600160a01b031686816125e2576125e2612c10565b049061264a565b808204910615150190565b92505050610bbc565b6001600160a01b0386168481029085828161261a5761261a612c10565b0414801561262757508082115b61263057600080fd5b8082036125b66124ce846001600160a01b038b1684612422565b8082018281101561149f57600080fd5b806001600160a01b038116811461216b57600080fd5b50805460008255600a02906000526020600020908101906126919190612694565b50565b5b80821115612708576000808255600182018190556002820180546001600160b81b031916905560038201819055600482018190556005820180546001600160c01b03191690556006820180546001600160a01b031916905560078201819055600882018190556009820155600a01612695565b5090565b6001600160a01b038116811461269157600080fd5b63ffffffff8116811461269157600080fd5b801515811461269157600080fd5b600080600080600060a0868803121561275957600080fd5b85356127648161270c565b9450602086013561277481612721565b935060408601359250606086013561278b8161270c565b9150608086013561279b81612733565b809150509295509295909350565b600081518084526020808501945080840160005b8381101561289757815180518051895284810151858a01526040808201516001600160a01b0316908a015260608082015160020b908a0152608080820151908a015260a0808201516001600160801b03908116918b019190915260c091820151169089015283015161288260e089018260018060a01b03808251168352602082015160020b6020840152604082015115156040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c08301525050565b506101c09690960195908201906001016127bd565b509495945050505050565b60006101a0865183526020870151602084015260408701516040840152606087015160608401526080870151608084015260018060a01b0380871660a08501528086511660c085015250602085015160020b60e084015260ff6040860151166101008401526001600160801b03606086015116610120840152608085015160020b61014084015262ffffff60a0860151166101608401528061018084015261237f818401856127a9565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8214156129785761297861294c565b5060000390565b6040516080810167ffffffffffffffff811182821017156129b057634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff811182821017156129b057634e487b7160e01b600052604160045260246000fd5b805161ffff8116811461216b57600080fd5b6000818303610120811215612a0d57600080fd5b612a1561297f565b8351612a208161270c565b81526020840151612a308161270c565b60208201526040840151612a438161270c565b604082015260c0605f1983011215612a5a57600080fd5b612a626129b6565b9150612a70606085016129e7565b8252612a7e608085016129e7565b602083015260a0840151612a9181612721565b604083015260c0840151612aa481612733565b606083015260e0840151612ab781612733565b6080830152610100840151612acb8161270c565b60a083015260608101919091529392505050565b60006001600160a01b0383811690831681811015612aff57612aff61294c565b039392505050565b60006001600160a01b03828116848216808303821115612b2957612b2961294c565b01949350505050565b600060208284031215612b4457600080fd5b815162ffffff81168114610d2f57600080fd5b60008219821115612b6a57612b6a61294c565b500190565b600062ffffff83811690831681811015612aff57612aff61294c565b60006001600160ff1b0381841382841380821686840486111615612bb157612bb161294c565b600160ff1b6000871282811687830589121615612bd057612bd061294c565b60008712925087820587128484161615612bec57612bec61294c565b87850587128184161615612c0257612c0261294c565b505050929093029392505050565b634e487b7160e01b600052601260045260246000fd5b600082612c3557612c35612c10565b600160ff1b821460001984141615612c4f57612c4f61294c565b500590565b600080821280156001600160ff1b0384900385131615612c7657612c7661294c565b600160ff1b8390038412811615612c8f57612c8f61294c565b50500190565b634e487b7160e01b600052602160045260246000fd5b6000816000190483118215151615612cc557612cc561294c565b500290565b600082612cd957612cd9612c10565b500490565b600062ffffff808316818516808303821115612b2957612b2961294c565b600082821015612d0e57612d0e61294c565b500390565b60008083128015600160ff1b850184121615612d3157612d3161294c565b6001600160ff1b0384018313811615612d4c57612d4c61294c565b50500390565b8051600281900b811461216b57600080fd5b600080600080600080600060e0888a031215612d7f57600080fd5b8751612d8a8161270c565b9650612d9860208901612d52565b9550612da6604089016129e7565b9450612db4606089016129e7565b9350612dc2608089016129e7565b925060a088015160ff81168114612dd857600080fd5b60c0890151909250612de981612733565b8091505092959891949750929550565b80516001600160801b038116811461216b57600080fd5b600060208284031215612e2257600080fd5b610d2f82612df9565b600060208284031215612e3d57600080fd5b610d2f82612d52565b60008160020b627fffff19811415612e6057612e6061294c565b60000392915050565b600080600080600080600080610100898b031215612e8657600080fd5b612e8f89612df9565b9750602089015180600f0b8114612ea557600080fd5b80975050604089015195506060890151945060808901518060060b8114612ecb57600080fd5b60a08a0151909450612edc8161270c565b60c08a0151909350612eed81612721565b60e08a0151909250612efe81612733565b809150509295985092959890939650565b600081600f0b6f7fffffffffffffffffffffffffffffff19811415612e6057612e6061294c565b60008160020b8360020b6000811281627fffff1901831281151615612f5d57612f5d61294c565b81627fffff018313811615612f7457612f7461294c565b5090039392505050565b60008160020b8360020b80612f9557612f95612c10565b627fffff19821460001982141615612faf57612faf61294c565b90059392505050565b60008260020b80612fcb57612fcb612c10565b808360020b0791505092915050565b60008160020b627fffff19811415612ff457612ff461294c565b6000190192915050565b60006020828403121561301057600080fd5b5051919050565b60008160020b8360020b627fffff6000821360008413838304851182821616156130435761304361294c565b627fffff1960008512828116878305871216156130625761306261294c565b6000871292508582058712848416161561307e5761307e61294c565b858505871281841616156130945761309461294c565b5050509290910295945050505050565b600060ff821660ff8416808210156130be576130be61294c565b90039392505050565b60008160020b8360020b6000821282627fffff038213811516156130ed576130ed61294c565b82627fffff190382128116156131055761310561294c565b5001939250505056fea164736f6c634300080c000a';

type SwapSimulatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapSimulatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapSimulator__factory extends ContractFactory {
  constructor(...args: SwapSimulatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapSimulator> {
    return super.deploy(overrides || {}) as Promise<SwapSimulator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapSimulator {
    return super.attach(address) as SwapSimulator;
  }
  connect(signer: Signer): SwapSimulator__factory {
    return super.connect(signer) as SwapSimulator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapSimulatorInterface {
    return new utils.Interface(_abi) as SwapSimulatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapSimulator {
    return new Contract(address, _abi, signerOrProvider) as SwapSimulator;
  }
}
