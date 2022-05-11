/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CollateralDepositSetTest,
  CollateralDepositSetTestInterface,
} from '../../../contracts/test/CollateralDepositSetTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_settlementToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InsufficientCollateralBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'U32L8_IllegalElement',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'element',
        type: 'uint32',
      },
    ],
    name: 'U32L8_NoSpaceLeftToInsert',
    type: 'error',
  },
  {
    inputs: [],
    name: 'cleanDeposits',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'realTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'decreaseBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fixFee',
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
    name: 'getAllDepositAccountMarketValue',
    outputs: [
      {
        internalType: 'int256',
        name: 'depositValue',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'realTokenAddress',
        type: 'address',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'realTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'increaseBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'cToken',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'twapDuration',
        type: 'uint32',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vToken',
        type: 'address',
      },
    ],
    name: 'initVToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocol',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'settlementToken',
        type: 'address',
      },
      {
        internalType: 'contract IVQuote',
        name: 'vQuote',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: 'liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'minRequiredMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minimumOrderNotional',
        type: 'uint256',
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
            internalType: 'contract IVToken',
            name: 'vToken',
            type: 'address',
          },
          {
            internalType: 'contract IUniswapV3Pool',
            name: 'vPool',
            type: 'address',
          },
          {
            internalType: 'contract IVPoolWrapper',
            name: 'vPoolWrapper',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint16',
                name: 'initialMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maintainanceMarginRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'maxVirtualPriceDeviationRatioBps',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'twapDuration',
                type: 'uint32',
              },
              {
                internalType: 'bool',
                name: 'isAllowedForTrade',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isCrossMargined',
                type: 'bool',
              },
              {
                internalType: 'contract IOracle',
                name: 'oracle',
                type: 'address',
              },
            ],
            internalType: 'struct IClearingHouseStructures.PoolSettings',
            name: 'settings',
            type: 'tuple',
          },
        ],
        internalType: 'struct IClearingHouseStructures.Pool',
        name: 'poolInfo',
        type: 'tuple',
      },
    ],
    name: 'registerPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'rangeLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'tokenLiquidationFeeFraction',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'closeFactorMMThresholdBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'partialLiquidationCloseFactorBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'insuranceFundFeeShareBps',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'liquidationSlippageSqrtToleranceBps',
            type: 'uint16',
          },
          {
            internalType: 'uint64',
            name: 'maxRangeLiquidationFees',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'minNotionalLiquidatable',
            type: 'uint64',
          },
        ],
        internalType: 'struct IClearingHouseStructures.LiquidationParams',
        name: '_liquidationParams',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_minRequiredMargin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_removeLimitOrderFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minimumOrderNotional',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_fixFee',
        type: 'uint256',
      },
    ],
    name: 'setAccountStorage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IVQuote',
        name: '_vQuote',
        type: 'address',
      },
    ],
    name: 'setVQuoteAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wrapper',
    outputs: [
      {
        internalType: 'contract VPoolWrapperMock',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051611f1c380380611f1c83398101604081905261002f91610099565b60405161003b9061008c565b604051809103906000f080158015610057573d6000803e3d6000fd5b5060d380546001600160a01b039283166001600160a01b031991821617909155600280549390921692169190911790556100c9565b610afd8061141f83390190565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b611347806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638ce744261161008c578063c28fd78711610066578063c28fd787146102b7578063ed16575a146102ca578063f8b2cb4f146102d2578063ff056949146102f857600080fd5b80638ce74426146101ad578063a96822a314610284578063ac210cc71461028c57600080fd5b8063713fdf47116100bd578063713fdf471461012857806382d9dbaa1461013b5780638b1a8fb61461016b57600080fd5b80631ca45818146100e45780633ffe794c146101005780635b86f59914610115575b600080fd5b6100ed606c5481565b6040519081526020015b60405180910390f35b61011361010e366004610bf4565b61030b565b005b610113610123366004610c22565b610350565b610113610136366004610c60565b610366565b610113610149366004610cab565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610113610179366004610cab565b63ffffffff8116600090815260208190526040902080546001600160a01b0319166001600160a01b03909216919091179055565b600254600354604080516101008101825260045461ffff80821683526201000082048116602084015264010000000082048116938301939093526601000000000000810483166060830152680100000000000000008104831660808301526a0100000000000000000000810490921660a082015267ffffffffffffffff6c010000000000000000000000008304811660c0830152600160a01b90920490911660e0820152600554600654600754610272956001600160a01b0390811695169392919086565b6040516100f796959493929190610cc8565b6100ed61048a565b60d35461029f906001600160a01b031681565b6040516001600160a01b0390911681526020016100f7565b6101136102c5366004610d90565b61049c565b6101136104c0565b6100ed6102e0366004610cab565b63ffffffff166000908152606e602052604090205490565b610113610306366004610c22565b61054d565b600061032661031d6020840184610cab565b63ffffffff1690565b63ffffffff81166000908152602081905260409020909150829061034a8282610e13565b50505050565b610362606d63ffffffff84168361055f565b5050565b6040805180820182526001600160a01b0380861682528251606081018452858216815263ffffffff8516602082810191909152600194820185905283015281519192839290916000916103b9911661059a565b63ffffffff90811682526020808301939093526040918201600020845181546001600160a01b039182166001600160a01b03199091161782559484015180516001909201805495820151919094015115157801000000000000000000000000000000000000000000000000027fffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffffff91909316600160a01b027fffffffffffffffff0000000000000000000000000000000000000000000000009095169190951617929092179290921617905550505050565b6000610497606d826105aa565b905090565b8460046104a98282610ff1565b5050600593909355600691909155600755606c5550565b60005b600881101561054a576000606d82600881106104e1576104e161115f565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff16600003610511575050565b63ffffffff8082166000908152606e602052604090205461053791606d9184916106fc16565b50806105428161118b565b9150506104c3565b50565b610362606d63ffffffff8416836106fc565b610569838361078d565b63ffffffff82166000908152600184016020526040812080548392906105909084906111a4565b9091555050505050565b600063ffffffff82165b92915050565b60008060005b60088160ff1610156106f45760008560ff8316600881106105d3576105d361115f565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff1660000361060557506106f4565b63ffffffff8181166000908152600187810160205260409182902090810154915163dd86c10160e01b8152600160a01b83049093166004840152916106d3916001600160a01b03169063dd86c10190602401602060405180830381865afa158015610674573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069891906111bc565b63ffffffff8416600090815260018a016020526040902054700100000000000000000000000000000000906106cc906108d1565b91906108e7565b6106dd90856111d5565b9350505080806106ec90611215565b9150506105b0565b509392505050565b63ffffffff821660009081526001840160205260409020548111156107345760405163b1eae4f160e01b815260040160405180910390fd5b63ffffffff821660009081526001840160205260408120805483929061075b908490611234565b909155505063ffffffff821660009081526001840160205260408120549003610788576107888383610933565b505050565b8063ffffffff166000036107bc57604051631d8b110f60e11b8152600060048201526024015b60405180910390fd5b600860005b6008811015610865578263ffffffff168482600881106107e3576107e361115f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036108105750505050565b60008482600881106108245761082461115f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff160361085357809150610865565b8061085d8161118b565b9150506107c1565b5060071981016108905760405163274ca29b60e11b815263ffffffff831660048201526024016107b3565b818382600881106108a3576108a361115f565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505050565b6000600160ff1b82106108e357600080fd5b5090565b6000610915610910600086126108fd5785610909565b6109098660001961124b565b8585610b42565b6108d1565b9050600084121561092c57610929816112d2565b90505b9392505050565b8063ffffffff1660000361095d57604051631d8b110f60e11b8152600060048201526024016107b3565b600860005b6008811015610a1d578263ffffffff168482600881106109845761098461115f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036109af578091505b8381600881106109c1576109c161115f565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16600003610a0b57600081116109f9576000610a04565b610a04600182611234565b9050610a1d565b80610a158161118b565b915050610962565b60088114610a2b5780610a3b565b610a37600160086112ee565b60ff165b90506008821461034a57818103610a8e576000848360088110610a6057610a6061115f565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff16021790555061034a565b838160088110610aa057610aa061115f565b600891828204019190066004029054906101000a900463ffffffff166000858460088110610ad057610ad061115f565b60089182820401919006600402878560088110610aef57610aef61115f565b600891828204019190066004028491906101000a81548163ffffffff021916908363ffffffff1602179055508391906101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b6000808060001985870985870292508281108382030391505080600003610b7b5760008411610b7057600080fd5b50829004905061092c565b808411610b8757600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60006101408284031215610c0757600080fd5b50919050565b6001600160a01b038116811461054a57600080fd5b60008060408385031215610c3557600080fd5b8235610c4081610c0d565b946020939093013593505050565b63ffffffff8116811461054a57600080fd5b600080600060608486031215610c7557600080fd5b8335610c8081610c0d565b92506020840135610c9081610c0d565b91506040840135610ca081610c4e565b809150509250925092565b600060208284031215610cbd57600080fd5b813561092c81610c0d565b60006101a0820190506001600160a01b03808916835280881660208401525061ffff808751166040840152806020880151166060840152806040880151166080840152506060860151610d2160a084018261ffff169052565b50608086015161ffff811660c08401525060a086015161ffff811660e08401525060c086015167ffffffffffffffff81166101008401525060e086015167ffffffffffffffff811661012084015250846101408301528361016083015282610180830152979650505050505050565b6000806000806000858703610180811215610daa57600080fd5b61010080821215610dba57600080fd5b969896890135975050506101208701359461014088013594506101608801359350915050565b6000813561ffff811681146105a457600080fd5b6000813580151581146105a457600080fd5b600081356105a481610c0d565b8135610e1e81610c0d565b81546001600160a01b0319166001600160a01b038216178255506020820135610e4681610c0d565b6001820180546001600160a01b0319166001600160a01b038316179055506040820135610e7281610c0d565b6002820180546001600160a01b0319166001600160a01b0383161790555060038101610eb6610ea360608501610de0565b825461ffff191661ffff91909116178255565b610edf610ec560808501610de0565b825463ffff0000191660109190911b63ffff000016178255565b610f0c610eee60a08501610de0565b825465ffff00000000191660209190911b65ffff0000000016178255565b60c0830135610f1a81610c4e565b81546aff00000000000000000000610f3460e08701610df4565b151560501b1669ffffffff0000000000008360301b166affffffffff000000000000198316171783555050610f9d610f6f6101008501610df4565b8280546bff0000000000000000000000191691151560581b6bff000000000000000000000016919091179055565b610788610fad6101208501610e06565b82546bffffffffffffffffffffffff1660609190911b6bffffffffffffffffffffffff1916178255565b6000813567ffffffffffffffff811681146105a457600080fd5b610ffd610ea383610de0565b61100c610ec560208401610de0565b61101b610eee60408401610de0565b61102760608301610de0565b815467ffff0000000000008260301b1691508167ffff00000000000019821617835569ffff000000000000000061106060808601610de0565b60401b16808369ffffffff000000000000198416171784556bffff0000000000000000000061109160a08701610de0565b60501b16836bffffffffffff0000000000001984161782171784555050506111036110be60c08401610fd7565b82547fffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffff1660609190911b73ffffffffffffffff00000000000000000000000016178255565b61036261111260e08401610fd7565b82547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff1660a09190911b7bffffffffffffffff000000000000000000000000000000000000000016178255565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161119d5761119d611175565b5060010190565b600082198211156111b7576111b7611175565b500190565b6000602082840312156111ce57600080fd5b5051919050565b6000808212826001600160ff1b03038413811516156111f6576111f6611175565b600160ff1b839003841281161561120f5761120f611175565b50500190565b600060ff821660ff810361122b5761122b611175565b60010192915050565b60008282101561124657611246611175565b500390565b60006001600160ff1b0360008413600084138583048511828216161561127357611273611175565b600160ff1b600087128281168783058912161561129257611292611175565b600087129250878205871284841616156112ae576112ae611175565b878505871281841616156112c4576112c4611175565b505050929093029392505050565b6000600160ff1b82016112e7576112e7611175565b5060000390565b600060ff821660ff84168082101561130857611308611175565b9003939250505056fea264697066735822122003082072e4293c3105baa5a58f149fb929882b2cd0f6d9ee629c5a2b884ad3de64736f6c634300080d0033608060405234801561001057600080fd5b50610add806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80636719578c116100cd578063a3a1e7e911610081578063d74dcaca11610066578063d74dcaca14610366578063ea6e4e521461039f578063fca6fbf2146103e757600080fd5b8063a3a1e7e914610313578063a3c35e2c1461023957600080fd5b806386c8e9a7116100b257806386c8e9a71461032a57806397c71faf14610340578063a34123a71461035357600080fd5b80636719578c146102e85780637779815c1461031357600080fd5b80632a99a79211610124578063512403361161010957806351240336146102c257806356d15a88146102d35780635e622abc146102e157600080fd5b80632a99a792146102395780634c2ebc581461025957600080fd5b806302dc9951146101565780630d8f6f461461017e578063195cd92c1461019f5780631dce5fcf14610217575b600080fd5b6001546101659062ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b61019161018c3660046106e5565b610400565b604051908152602001610175565b6101b26101ad366004610728565b610415565b6040516101759190600060e082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a08301516001600160a01b0380821660a08501528060c08601511660c0850152505092915050565b61022a61022536600461077a565b6104c3565b604051610175939291906107c2565b61024c610247366004610806565b610594565b6040516101759190610839565b6102c0610267366004610864565b60408051608081018252948552602080860194855285820193845260608601928352600297880b600090815280825282812097890b81529690529094209251835590516001830155519281019290925551600390910155565b005b6102c06102d03660046108b9565b50565b6102c06102d03660046108d4565b6000610191565b6003546102fb906001600160a01b031681565b6040516001600160a01b039091168152602001610175565b701400000000000000000000000000000000610191565b600154610165906301000000900462ffffff1681565b61019161034e3660046106e5565b610611565b61022a61036136600461077a565b61061f565b6102c06103743660046108ec565b600293840b6000908152602085815260408083209590960b8252939093529290912090815560010155565b6102c06103ad36600461092e565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600154610165906601000000000000900462ffffff1681565b600061040f82610f9f19610961565b92915050565b6104676040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b8315156000841303610499576020810183905261048383610a01565b61048f90610fa0610961565b60408201526104bc565b610fa06104a584610a01565b6104af9190610a1d565b6020820152604081018390525b9392505050565b6000806104f16040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b03166004600082825461050c9190610a59565b9091555050600286810b6000908152602082815260408083209389900b83529290522060010154610547906001600160801b03861690610a71565b600287810b600090815260208281526040808320938a900b8352929052205490935061057d906001600160801b03861690610a71565b91506105898686610594565b905093509350939050565b6105bf6040518060800160405280600081526020016000815260200160008152602001600081525090565b50600291820b60009081526020818152604080832093850b8352928152908290208251608081018452815481526001820154928101929092529283015491810191909152600390910154606082015290565b600061040f610fa083610a1d565b60008061064d6040518060800160405280600081526020016000815260200160008152602001600081525090565b836001600160801b0316600460008282546106689190610a90565b9091555050600286810b6000908152602082815260408083209389900b835292905220546106a0906001600160801b03861690610a71565b600287810b600090815260208281526040808320938a900b835292905220600101549092506106d9906001600160801b03861690610a71565b92506105898686610594565b6000602082840312156106f757600080fd5b5035919050565b8035801515811461070e57600080fd5b919050565b6001600160a01b03811681146102d057600080fd5b60008060006060848603121561073d57600080fd5b610746846106fe565b925060208401359150604084013561075d81610713565b809150509250925092565b8035600281900b811461070e57600080fd5b60008060006060848603121561078f57600080fd5b61079884610768565b92506107a660208501610768565b915060408401356001600160801b038116811461075d57600080fd5b8381526020810183905260c081016107fe6040830184805182526020810151602083015260408101516040830152606081015160608301525050565b949350505050565b6000806040838503121561081957600080fd5b61082283610768565b915061083060208401610768565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080810161040f565b60008060008060008060c0878903121561087d57600080fd5b61088687610768565b955061089460208801610768565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000602082840312156108cb57600080fd5b6104bc826106fe565b600060c082840312156108e657600080fd5b50919050565b6000806000806080858703121561090257600080fd5b61090b85610768565b935061091960208601610768565b93969395505050506040820135916060013590565b60006020828403121561094057600080fd5b81356104bc81610713565b634e487b7160e01b600052601160045260246000fd5b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000841360008413858304851182821616156109a2576109a261094b565b600160ff1b60008712828116878305891216156109c1576109c161094b565b600087129250878205871284841616156109dd576109dd61094b565b878505871281841616156109f3576109f361094b565b505050929093029392505050565b6000600160ff1b8201610a1657610a1661094b565b5060000390565b600082610a3a57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610a5457610a5461094b565b500590565b60008219821115610a6c57610a6c61094b565b500190565b6000816000190483118215151615610a8b57610a8b61094b565b500290565b600082821015610aa257610aa261094b565b50039056fea2646970667358221220263efaa3aa4f2f1eabb69c985bfda5e99c93e51dbf8b24c9c9e3453c8f3ab94464736f6c634300080d0033';

type CollateralDepositSetTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollateralDepositSetTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollateralDepositSetTest__factory extends ContractFactory {
  constructor(...args: CollateralDepositSetTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralDepositSetTest> {
    return super.deploy(
      _settlementToken,
      overrides || {}
    ) as Promise<CollateralDepositSetTest>;
  }
  override getDeployTransaction(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_settlementToken, overrides || {});
  }
  override attach(address: string): CollateralDepositSetTest {
    return super.attach(address) as CollateralDepositSetTest;
  }
  override connect(signer: Signer): CollateralDepositSetTest__factory {
    return super.connect(signer) as CollateralDepositSetTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollateralDepositSetTestInterface {
    return new utils.Interface(_abi) as CollateralDepositSetTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralDepositSetTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CollateralDepositSetTest;
  }
}