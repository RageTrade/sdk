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
        internalType: 'contract IVToken',
        name: 'vToken',
        type: 'address',
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
        internalType: 'struct IClearingHouse.SwapValues',
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
  '0x608060405234801561001057600080fd5b506131e0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635d067ccd14610030575b600080fd5b61004361003e3660046127e6565b61005c565b6040516100539493929190612947565b60405180910390f35b61008e6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260606100e8898960008a12886100dd576100d88b612a07565b6100df565b8a5b8a6103ae6106b9565b6040805160c081018252600080546001600160a01b0381168352600160a01b8104600290810b602080860191909152600160b81b90920460ff16848601526001546001600160801b0381166060860152600160801b8104820b6080860152600160981b900462ffffff1660a085015280548551818402810184019096528086529599509296509293919284015b8282101561034b57838290600052602060002090600a0201604051806040016040529081600082016040518060e001604052908160008201548152602001600182015481526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160149054906101000a900460020b60020b60020b8152602001600382015481526020016004820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016004820160109054906101000a90046001600160801b03166001600160801b03166001600160801b0316815250508152602001600582016040518060e00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016000820160149054906101000a900460020b60020b60020b81526020016000820160179054906101000a900460ff161515151581526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201548152602001600382015481526020016004820154815250508152505081526020019060010190610175565b5050600354600080546001600160c01b0319168155600180546001600160b01b03191690556001600160a01b03909116965092935061038f92600292509050612727565b600380546001600160a01b031916905592989197509550909350915050565b826000808201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160176101000a81548160ff021916908360ff16021790555060608201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160010160106101000a81548162ffffff021916908360020b62ffffff16021790555060a08201518160010160136101000a81548162ffffff021916908362ffffff160217905550905050600260405180604001604052808481526020018381525090806001815401808255809150506001900390600052602060002090600a0201600090919091909150600082015181600001600082015181600001556020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160020160146101000a81548162ffffff021916908360020b62ffffff1602179055506080820151816003015560a08201518160040160006101000a8154816001600160801b0302191690836001600160801b0316021790555060c08201518160040160106101000a8154816001600160801b0302191690836001600160801b03160217905550505060208201518160050160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548162ffffff021916908360020b62ffffff16021790555060408201518160000160176101000a81548160ff02191690831515021790555060608201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816002015560a0820151816003015560c08201518160040155505050508160400151600360006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050505050565b6106eb6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8381526040516329018f6f60e21b81526001600160a01b0387811660048301526000919089169063a4063dbc9060240160e060405180830381865afa158015610738573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075c9190612ab2565b905060008512156001600160a01b0385166107ad578661079a57610795600173fffd8963efd1fc6a506488495d951d5263988d26612b6e565b6107aa565b6107aa6401000276a36001612b96565b94505b600080600084600001516001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108189190612bc1565b85602001516001600160a01b03166386c8e9a76040518163ffffffff1660e01b8152600401602060405180830381865afa15801561085a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087e9190612bc1565b86602001516001600160a01b031663fca6fbf26040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e49190612bc1565b9250925092506108f8848b8585858b6109f5565b84516000908190610915906001600160a01b03168d8d8d8d610aa0565b8851604051630251596160e31b81523060048201528f15156024820152604481018f90526001600160a01b038e8116606483015260a06084830152600060a4830152939550919350919091169063128acb089060c40160408051808303816000875af1158015610989573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ad9190612be6565b60408a015260208901819052821480156109ca5750876040015181145b6109d6576109d6612c0a565b50506109e6848b8585858b610b20565b50505050509695505050505050565b8515610a56578415610a14578051610a0d9085610c30565b8152610a98565b8051610a239060028585610c7b565b60808301819052606083018290528251610a49929091610a4291612c20565b6001610da8565b808252610a0d9085610c30565b84610a6057610a98565b8051610a6f9060018585610c7b565b60808301819052606083018290528251610a95929091610a8e91612c20565b6000610da8565b81525b505050505050565b600080610b12878787878b6001600160a01b031663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0c9190612bc1565b88610ded565b915091509550959350505050565b8515610baa578415610b7d57610b3a816020015185611516565b60208201526040810151610b519060008585610c7b565b60808301819052606083018290526040830151610b73929091610a4291612c20565b6040820152610a98565b610b8b816040015185611516565b6040820181905260808201516060830151610b739291610a8e91612c20565b84610bf357610bbd816040015185611516565b60408201819052610bd19060008585610c7b565b60808301819052606083018290526040830151610b73929091610a8e91612c20565b610c01816020015185611516565b6020820152604081015160808201516060830151610c239291610a4291612c20565b6040820152505050505050565b600080610c4083620f4240612c38565b60020b610c5262ffffff851686612c54565b610c5c9190612cef565b610c67906001612d1d565b9050610c738185612d1d565b949350505050565b6000806000610c898761153d565b90506001866002811115610c9f57610c9f612d5e565b1415610ce05783610cb386620f4240612c38565b610cbd9190612c38565b62ffffff16610ccf82620f4240612d74565b610cd99190612d93565b9050610d31565b6002866002811115610cf457610cf4612d5e565b1415610d315783610d0886620f4240612da7565b610d129190612da7565b62ffffff16610d2482620f4240612d74565b610d2e9190612d93565b90505b6000620f4240610d418688612da7565b610d509062ffffff1684612d74565b610d5a9190612d93565b610d65906001612c20565b9050620f4240610d7a62ffffff881684612d74565b610d849190612d93565b610d8f906001612c20565b9350610d9b8482612dc5565b9250505094509492505050565b600080826001811115610dbd57610dbd612d5e565b14600085131415610dd957610dd28385612d1d565b9050610de6565b610de38385612ddc565b90505b9392505050565b60008085610e275760405162461bcd60e51b8152602060048201526002602482015261415360f01b60448201526064015b60405180910390fd5b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152886001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610e97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebb9190612e2d565b5060ff1660408088019190915260029490940b6020808801919091526001600160a01b0395861687528451630d34328160e11b81529451958f1695631a68650295600480820196509294509092508290030181865afa158015610f22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f469190612ed9565b6001600160801b03166060820152604080516334324e9f60e21b815290516001600160a01b038b169163d0c93a7c9160048083019260209291908290030181865afa158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd9190612ef4565b60020b608082015262ffffff851660a08201528761101b5780600001516001600160a01b0316866001600160a01b0316118015611016575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038716105b61104d565b80600001516001600160a01b0316866001600160a01b031610801561104d57506401000276a36001600160a01b038716115b61107f5760405162461bcd60e51b815260206004820152600360248201526214d41360ea1b6044820152606401610e1e565b6000808813905060006040518060e001604052808a81526020016000815260200184600001516001600160a01b03168152602001846020015160020b81526020016000815260200160006001600160801b0316815260200184606001516001600160801b031681525090505b8051158015906111115750876001600160a01b031681604001516001600160a01b031614155b156114d1576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260408201516001600160a01b0390811682526060830151608086015161117e928f1691635339c296918f61155c565b1515604083015260020b60208201819052620d89e71913156111a957620d89e71960208201526111dd565b6111b6620d89e719612f0f565b60020b816020015160020b13156111dd576111d4620d89e719612f0f565b60020b60208201525b6111ea81602001516117c8565b6001600160a01b03166060820152604082015161125f908c611224578a6001600160a01b031683606001516001600160a01b03161161123e565b8a6001600160a01b031683606001516001600160a01b0316105b61124c57826060015161124e565b8a5b60c0850151855160a0890151611afb565b60c085015260a084015260808301526001600160a01b0316604083015282156112d75761129e8160c0015182608001516112999190612c20565b611ced565b825183906112ad908390612ddc565b90525060a08101516112be90611ced565b82602001516112cd9190612ddc565b6020830152611322565b6112e48160a00151611ced565b825183906112f3908390612d1d565b90525060c0810151608082015161130d9161129991612c20565b826020015161131c9190612d1d565b60208301525b60c08201516001600160801b03161561136a576113558160c00151600160801b8460c001516001600160801b0316611cff565b826080018181516113669190612c20565b9052505b63ffffffff611dad81169088161461138c5761138c8b8584848b63ffffffff16565b80606001516001600160a01b031682604001516001600160a01b031614156114945780604001511561146757602081015160405163f30dba9360e01b815260029190910b60048201526000906001600160a01b038e169063f30dba939060240161010060405180830381865afa15801561140a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142e9190612f32565b5050505050509150508b156114495761144681612fd4565b90505b6114578360c0015182611db3565b6001600160801b031660c0840152505b8a611476578060200151611487565b600181602001516114879190612ffb565b60020b60608301526114cb565b80600001516001600160a01b031682604001516001600160a01b0316146114cb576114c28260400151611e50565b60020b60608301525b506110eb565b8115158a1515146114f257602081015181516114ed908b612ddc565b611504565b80516114fe908a612ddc565b81602001515b94509450505050965096945050505050565b6000620f42406115268382612c38565b6115339060020b85612c54565b610de69190612cef565b60008082136115545761154f82612a07565b611556565b815b92915050565b6000808061156a8587613043565b905060008660020b12801561158a5750611584858761307d565b60020b15155b1561159d57806115998161309f565b9150505b83156116a2576000806115af83612169565b90925090506000600160ff831681901b906115ca9082612dc5565b6115d49190612c20565b90506000818c8c866040518263ffffffff1660e01b8152600401611601919060019190910b815260200190565b602060405180830381865afa15801561161e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164291906130c3565b16801515965090508561166c578861165d60ff851687612ffb565b61166791906130dc565b611697565b8861167682612186565b6116809085613169565b61168d9060ff1687612ffb565b61169791906130dc565b9650505050506117bd565b6000806116b86116b384600161318c565b612169565b909250905060006116d0600160ff841681901b612dc5565b1990506000818c8c866040518263ffffffff1660e01b81526004016116fe919060019190910b815260200190565b602060405180830381865afa15801561171b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173f91906130c3565b16801515965090508561177f57886117588460ff613169565b60ff1661176687600161318c565b611770919061318c565b61177a91906130dc565b6117b6565b888361178a83612227565b6117949190613169565b60ff166117a287600161318c565b6117ac919061318c565b6117b691906130dc565b9650505050505b509550959350505050565b60008060008360020b126117df578260020b6117e7565b8260020b6000035b9050620d89e88111156118205760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610e1e565b60006001821661183457600160801b611846565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561187a576ffff97272373d413259a46990580e213a0260801c5b6004821615611899576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156118b8576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156118d7576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156118f6576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611915576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611934576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611954576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611974576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611994576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156119b4576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156119d4576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156119f4576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611a14576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611a34576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611a55576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611a75576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611a94576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611ab1576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611ad2578060001981611ace57611ace612cd9565b0490505b640100000000810615611ae6576001611ae9565b60005b60ff16602082901c0192505050919050565b60008080806001600160a01b03808916908a161015818712801590611b80576000611b348989620f42400362ffffff16620f4240611cff565b905082611b4d57611b488c8c8c6001612311565b611b5a565b611b5a8b8d8c600161238a565b9550858110611b6b578a9650611b7a565b611b778c8b8386612441565b96505b50611bca565b81611b9757611b928b8b8b600061238a565b611ba4565b611ba48a8c8b6000612311565b9350838860000310611bb857899550611bca565b611bc78b8a8a6000038561248d565b95505b6001600160a01b038a8116908716148215611c2d57808015611be95750815b611bff57611bfa878d8c600161238a565b611c01565b855b9550808015611c0e575081155b611c2457611c1f878d8c6000612311565b611c26565b845b9450611c77565b808015611c375750815b611c4d57611c488c888c6001612311565b611c4f565b855b9550808015611c5c575081155b611c7257611c6d8c888c600061238a565b611c74565b845b94505b81158015611c8757508860000385115b15611c93578860000394505b818015611cb257508a6001600160a01b0316876001600160a01b031614155b15611cc1578589039350611cde565b611cdb868962ffffff168a620f42400362ffffff166124d9565b93505b50505095509550955095915050565b6000600160ff1b821061155457600080fd5b600080806000198587098587029250828110838203039150508060001415611d395760008411611d2e57600080fd5b508290049050610de6565b808411611d4557600080fd5b600084868809851960019081018716968790046003810260029081188083028203028083028203028083028203028083028203028083028203029182029003026000889003889004909101858311909403939093029303949094049190911702949350505050565b50505050565b60008082600f0b1215611e0457508082016001600160801b038084169082161061154f5760405162461bcd60e51b81526020600482015260026024820152614c5360f01b6044820152606401610e1e565b826001600160801b03168284019150816001600160801b031610156115565760405162461bcd60e51b81526020600482015260026024820152614c4160f01b6044820152606401610e1e565b60006401000276a36001600160a01b03831610801590611e8c575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b611ebc5760405162461bcd60e51b81526020600482015260016024820152602960f91b6044820152606401610e1e565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110611f5057607f810383901c9150611f5a565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461215a57886001600160a01b031661213f826117c8565b6001600160a01b03161115612154578161215c565b8061215c565b815b9998505050505050505050565b600281900b60081d600061217f6101008461307d565b9050915091565b600080821161219457600080fd5b600160801b82106121a757608091821c91015b6801000000000000000082106121bf57604091821c91015b64010000000082106121d357602091821c91015b6201000082106121e557601091821c91015b61010082106121f657600891821c91015b6010821061220657600491821c91015b6004821061221657600291821c91015b60028210612222576001015b919050565b600080821161223557600080fd5b5060ff6001600160801b0382161561225057607f1901612258565b608082901c91505b67ffffffffffffffff82161561227157603f1901612279565b604082901c91505b63ffffffff82161561228e57601f1901612296565b602082901c91505b61ffff8216156122a957600f19016122b1565b601082901c91505b60ff8216156122c357600719016122cb565b600882901c91505b600f8216156122dd57600319016122e5565b600482901c91505b60038216156122f757600119016122ff565b600282901c91505b60018216156122225760001901919050565b6000836001600160a01b0316856001600160a01b03161115612331579293925b8161235e57612359836001600160801b03168686036001600160a01b0316600160601b611cff565b612381565b612381836001600160801b03168686036001600160a01b0316600160601b6124d9565b95945050505050565b6000836001600160a01b0316856001600160a01b031611156123aa579293925b600160601b600160e01b03606084901b166001600160a01b0386860381169087166123d457600080fd5b8361240a57866001600160a01b03166123f78383896001600160a01b0316611cff565b8161240457612404612cd9565b04612436565b6124366124218383896001600160a01b03166124d9565b886001600160a01b0316808204910615150190565b979650505050505050565b600080856001600160a01b03161161245857600080fd5b6000846001600160801b03161161246e57600080fd5b81612480576123598585856001612519565b6123818585856001612606565b600080856001600160a01b0316116124a457600080fd5b6000846001600160801b0316116124ba57600080fd5b816124cc576123598585856000612606565b6123818585856000612519565b60006124e6848484611cff565b9050600082806124f8576124f8612cd9565b8486091115610de657600019811061250f57600080fd5b6001019392505050565b600081156125925760006001600160a01b0384111561254f5761254a84600160601b876001600160801b0316611cff565b61256d565b6001600160801b038516606085901b8161256b5761256b612cd9565b045b905061258a6125856001600160a01b03881683612701565b612711565b915050610c73565b60006001600160a01b038411156125c0576125bb84600160601b876001600160801b03166124d9565b6125dd565b6125dd606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116125f457600080fd5b6001600160a01b038616039050610c73565b600082612614575083610c73565b600160601b600160e01b03606085901b1682156126b4576001600160a01b0386168481029085828161264857612648612cd9565b041415612679578181018281106126775761266d83896001600160a01b0316836124d9565b9350505050610c73565b505b6126ab826126a0878a6001600160a01b0316868161269957612699612cd9565b0490612701565b808204910615150190565b92505050610c73565b6001600160a01b038616848102908582816126d1576126d1612cd9565b041480156126de57508082115b6126e757600080fd5b80820361266d612585846001600160a01b038b16846124d9565b8082018281101561155657600080fd5b806001600160a01b038116811461222257600080fd5b50805460008255600a0290600052602060002090810190612748919061274b565b50565b5b808211156127bf576000808255600182018190556002820180546001600160b81b031916905560038201819055600482018190556005820180546001600160c01b03191690556006820180546001600160a01b031916905560078201819055600882018190556009820155600a0161274c565b5090565b6001600160a01b038116811461274857600080fd5b801515811461274857600080fd5b600080600080600060a086880312156127fe57600080fd5b8535612809816127c3565b94506020860135612819816127c3565b9350604086013592506060860135612830816127c3565b91506080860135612840816127d8565b809150509295509295909350565b600081518084526020808501945080840160005b8381101561293c57815180518051895284810151858a01526040808201516001600160a01b0316908a015260608082015160020b908a0152608080820151908a015260a0808201516001600160801b03908116918b019190915260c091820151169089015283015161292760e089018260018060a01b03808251168352602082015160020b6020840152604082015115156040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c08301525050565b506101c0969096019590820190600101612862565b509495945050505050565b60006101a0865183526020870151602084015260408701516040840152606087015160608401526080870151608084015260018060a01b0380871660a08501528086511660c085015250602085015160020b60e084015260ff6040860151166101008401526001600160801b03606086015116610120840152608085015160020b61014084015262ffffff60a086015116610160840152806101808401526124368184018561284e565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415612a1d57612a1d6129f1565b5060000390565b6040516060810167ffffffffffffffff81118282101715612a5557634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff81118282101715612a5557634e487b7160e01b600052604160045260246000fd5b805161ffff8116811461222257600080fd5b805163ffffffff8116811461222257600080fd5b600081830360e0811215612ac557600080fd5b612acd612a24565b8351612ad8816127c3565b81526020840151612ae8816127c3565b602082015260a0603f1983011215612aff57600080fd5b612b07612a5b565b9150612b1560408501612a8c565b8252612b2360608501612a8c565b6020830152612b3460808501612a9e565b604083015260a0840151612b47816127d8565b606083015260c0840151612b5a816127c3565b608083015260408101919091529392505050565b60006001600160a01b0383811690831681811015612b8e57612b8e6129f1565b039392505050565b60006001600160a01b03828116848216808303821115612bb857612bb86129f1565b01949350505050565b600060208284031215612bd357600080fd5b815162ffffff81168114610de657600080fd5b60008060408385031215612bf957600080fd5b505080516020909101519092909150565b634e487b7160e01b600052600160045260246000fd5b60008219821115612c3357612c336129f1565b500190565b600062ffffff83811690831681811015612b8e57612b8e6129f1565b60006001600160ff1b0381841382841380821686840486111615612c7a57612c7a6129f1565b600160ff1b6000871282811687830589121615612c9957612c996129f1565b60008712925087820587128484161615612cb557612cb56129f1565b87850587128184161615612ccb57612ccb6129f1565b505050929093029392505050565b634e487b7160e01b600052601260045260246000fd5b600082612cfe57612cfe612cd9565b600160ff1b821460001984141615612d1857612d186129f1565b500590565b600080821280156001600160ff1b0384900385131615612d3f57612d3f6129f1565b600160ff1b8390038412811615612d5857612d586129f1565b50500190565b634e487b7160e01b600052602160045260246000fd5b6000816000190483118215151615612d8e57612d8e6129f1565b500290565b600082612da257612da2612cd9565b500490565b600062ffffff808316818516808303821115612bb857612bb86129f1565b600082821015612dd757612dd76129f1565b500390565b60008083128015600160ff1b850184121615612dfa57612dfa6129f1565b6001600160ff1b0384018313811615612e1557612e156129f1565b50500390565b8051600281900b811461222257600080fd5b600080600080600080600060e0888a031215612e4857600080fd5b8751612e53816127c3565b9650612e6160208901612e1b565b9550612e6f60408901612a8c565b9450612e7d60608901612a8c565b9350612e8b60808901612a8c565b925060a088015160ff81168114612ea157600080fd5b60c0890151909250612eb2816127d8565b8091505092959891949750929550565b80516001600160801b038116811461222257600080fd5b600060208284031215612eeb57600080fd5b610de682612ec2565b600060208284031215612f0657600080fd5b610de682612e1b565b60008160020b627fffff19811415612f2957612f296129f1565b60000392915050565b600080600080600080600080610100898b031215612f4f57600080fd5b612f5889612ec2565b9750602089015180600f0b8114612f6e57600080fd5b80975050604089015195506060890151945060808901518060060b8114612f9457600080fd5b60a08a0151909450612fa5816127c3565b9250612fb360c08a01612a9e565b915060e0890151612fc3816127d8565b809150509295985092959890939650565b600081600f0b6f7fffffffffffffffffffffffffffffff19811415612f2957612f296129f1565b60008160020b8360020b6000811281627fffff1901831281151615613022576130226129f1565b81627fffff018313811615613039576130396129f1565b5090039392505050565b60008160020b8360020b8061305a5761305a612cd9565b627fffff19821460001982141615613074576130746129f1565b90059392505050565b60008260020b8061309057613090612cd9565b808360020b0791505092915050565b60008160020b627fffff198114156130b9576130b96129f1565b6000190192915050565b6000602082840312156130d557600080fd5b5051919050565b60008160020b8360020b627fffff600082136000841383830485118282161615613108576131086129f1565b627fffff196000851282811687830587121615613127576131276129f1565b60008712925085820587128484161615613143576131436129f1565b85850587128184161615613159576131596129f1565b5050509290910295945050505050565b600060ff821660ff841680821015613183576131836129f1565b90039392505050565b60008160020b8360020b6000821282627fffff038213811516156131b2576131b26129f1565b82627fffff190382128116156131ca576131ca6129f1565b5001939250505056fea164736f6c634300080a000a';

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
    this.contractName = 'SwapSimulator';
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
  static readonly contractName: 'SwapSimulator';
  public readonly contractName: 'SwapSimulator';
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