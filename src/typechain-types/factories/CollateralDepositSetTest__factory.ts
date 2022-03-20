/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  CollateralDepositSetTest,
  CollateralDepositSetTestInterface,
} from '../CollateralDepositSetTest';

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
  '0x608060405234801561001057600080fd5b50604051611fd9380380611fd983398101604081905261002f91610099565b60405161003b9061008c565b604051809103906000f080158015610057573d6000803e3d6000fd5b5060d380546001600160a01b039283166001600160a01b031991821617909155600280549390921692169190911790556100c9565b610b3e8061149b83390190565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b6113c3806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638ce744261161008c578063c28fd78711610066578063c28fd787146102b7578063ed16575a146102ca578063f8b2cb4f146102d2578063ff056949146102f857600080fd5b80638ce74426146101ad578063a96822a314610284578063ac210cc71461028c57600080fd5b8063713fdf47116100bd578063713fdf471461012857806382d9dbaa1461013b5780638b1a8fb61461016b57600080fd5b80631ca45818146100e45780633ffe794c146101005780635b86f59914610115575b600080fd5b6100ed606c5481565b6040519081526020015b60405180910390f35b61011361010e366004610c3f565b61030b565b005b610113610123366004610c6d565b610350565b610113610136366004610cab565b610366565b610113610149366004610cf6565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610113610179366004610cf6565b63ffffffff8116600090815260208190526040902080546001600160a01b0319166001600160a01b03909216919091179055565b600254600354604080516101008101825260045461ffff80821683526201000082048116602084015264010000000082048116938301939093526601000000000000810483166060830152680100000000000000008104831660808301526a0100000000000000000000810490921660a082015267ffffffffffffffff6c010000000000000000000000008304811660c0830152600160a01b90920490911660e0820152600554600654600754610272956001600160a01b0390811695169392919086565b6040516100f796959493929190610d13565b6100ed61048a565b60d35461029f906001600160a01b031681565b6040516001600160a01b0390911681526020016100f7565b6101136102c5366004610ddb565b61049c565b6101136104c0565b6100ed6102e0366004610cf6565b63ffffffff166000908152606e602052604090205490565b610113610306366004610c6d565b61054d565b600061032661031d6020840184610cf6565b63ffffffff1690565b63ffffffff81166000908152602081905260409020909150829061034a8282610e5e565b50505050565b610362606d63ffffffff84168361055f565b5050565b6040805180820182526001600160a01b0380861682528251606081018452858216815263ffffffff8516602082810191909152600194820185905283015281519192839290916000916103b9911661059a565b63ffffffff90811682526020808301939093526040918201600020845181546001600160a01b039182166001600160a01b03199091161782559484015180516001909201805495820151919094015115157801000000000000000000000000000000000000000000000000027fffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffffff91909316600160a01b027fffffffffffffffff0000000000000000000000000000000000000000000000009095169190951617929092179290921617905550505050565b6000610497606d826105aa565b905090565b8460046104a9828261103c565b5050600593909355600691909155600755606c5550565b60005b600881101561054a576000606d82600881106104e1576104e16111aa565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff16600003610511575050565b63ffffffff8082166000908152606e602052604090205461053791606d91849161071516565b5080610542816111d6565b9150506104c3565b50565b610362606d63ffffffff841683610715565b61056983836107bf565b63ffffffff82166000908152600184016020526040812080548392906105909084906111ef565b9091555050505050565b600063ffffffff82165b92915050565b60008060005b60088160ff16101561070d5760008560ff8316600881106105d3576105d36111aa565b600891828204019190066004029054906101000a900463ffffffff1690508063ffffffff16600003610605575061070d565b63ffffffff818116600090815260018781016020526040918290209081015491517fdd86c101000000000000000000000000000000000000000000000000000000008152600160a01b83049093166004840152916106ec916001600160a01b03169063dd86c10190602401602060405180830381865afa15801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b19190611207565b63ffffffff8416600090815260018a016020526040902054700100000000000000000000000000000000906106e59061091c565b9190610932565b6106f69085611220565b93505050808061070590611278565b9150506105b0565b509392505050565b63ffffffff82166000908152600184016020526040902054811115610766576040517fb1eae4f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b63ffffffff821660009081526001840160205260408120805483929061078d908490611297565b909155505063ffffffff8216600090815260018401602052604081205490036107ba576107ba838361097e565b505050565b8063ffffffff166000036107ee57604051631d8b110f60e11b8152600060048201526024015b60405180910390fd5b600860005b6008811015610897578263ffffffff16848260088110610815576108156111aa565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036108425750505050565b6000848260088110610856576108566111aa565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff160361088557809150610897565b8061088f816111d6565b9150506107f3565b5060071981016108db576040517f4e99453600000000000000000000000000000000000000000000000000000000815263ffffffff831660048201526024016107e5565b818382600881106108ee576108ee6111aa565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550505050565b6000600160ff1b821061092e57600080fd5b5090565b600061096061095b600086126109485785610954565b610954866000196112ae565b8585610b8d565b61091c565b90506000841215610977576109748161134e565b90505b9392505050565b8063ffffffff166000036109a857604051631d8b110f60e11b8152600060048201526024016107e5565b600860005b6008811015610a68578263ffffffff168482600881106109cf576109cf6111aa565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16036109fa578091505b838160088110610a0c57610a0c6111aa565b600891828204019190066004029054906101000a900463ffffffff1663ffffffff16600003610a565760008111610a44576000610a4f565b610a4f600182611297565b9050610a68565b80610a60816111d6565b9150506109ad565b60088114610a765780610a86565b610a826001600861136a565b60ff165b90506008821461034a57818103610ad9576000848360088110610aab57610aab6111aa565b600891828204019190066004026101000a81548163ffffffff021916908363ffffffff16021790555061034a565b838160088110610aeb57610aeb6111aa565b600891828204019190066004029054906101000a900463ffffffff166000858460088110610b1b57610b1b6111aa565b60089182820401919006600402878560088110610b3a57610b3a6111aa565b600891828204019190066004028491906101000a81548163ffffffff021916908363ffffffff1602179055508391906101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b6000808060001985870985870292508281108382030391505080600003610bc65760008411610bbb57600080fd5b508290049050610977565b808411610bd257600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60006101408284031215610c5257600080fd5b50919050565b6001600160a01b038116811461054a57600080fd5b60008060408385031215610c8057600080fd5b8235610c8b81610c58565b946020939093013593505050565b63ffffffff8116811461054a57600080fd5b600080600060608486031215610cc057600080fd5b8335610ccb81610c58565b92506020840135610cdb81610c58565b91506040840135610ceb81610c99565b809150509250925092565b600060208284031215610d0857600080fd5b813561097781610c58565b60006101a0820190506001600160a01b03808916835280881660208401525061ffff808751166040840152806020880151166060840152806040880151166080840152506060860151610d6c60a084018261ffff169052565b50608086015161ffff811660c08401525060a086015161ffff811660e08401525060c086015167ffffffffffffffff81166101008401525060e086015167ffffffffffffffff811661012084015250846101408301528361016083015282610180830152979650505050505050565b6000806000806000858703610180811215610df557600080fd5b61010080821215610e0557600080fd5b969896890135975050506101208701359461014088013594506101608801359350915050565b6000813561ffff811681146105a457600080fd5b6000813580151581146105a457600080fd5b600081356105a481610c58565b8135610e6981610c58565b81546001600160a01b0319166001600160a01b038216178255506020820135610e9181610c58565b6001820180546001600160a01b0319166001600160a01b038316179055506040820135610ebd81610c58565b6002820180546001600160a01b0319166001600160a01b0383161790555060038101610f01610eee60608501610e2b565b825461ffff191661ffff91909116178255565b610f2a610f1060808501610e2b565b825463ffff0000191660109190911b63ffff000016178255565b610f57610f3960a08501610e2b565b825465ffff00000000191660209190911b65ffff0000000016178255565b60c0830135610f6581610c99565b81546aff00000000000000000000610f7f60e08701610e3f565b151560501b1669ffffffff0000000000008360301b166affffffffff000000000000198316171783555050610fe8610fba6101008501610e3f565b8280546bff0000000000000000000000191691151560581b6bff000000000000000000000016919091179055565b6107ba610ff86101208501610e51565b82546bffffffffffffffffffffffff1660609190911b6bffffffffffffffffffffffff1916178255565b6000813567ffffffffffffffff811681146105a457600080fd5b611048610eee83610e2b565b611057610f1060208401610e2b565b611066610f3960408401610e2b565b61107260608301610e2b565b815467ffff0000000000008260301b1691508167ffff00000000000019821617835569ffff00000000000000006110ab60808601610e2b565b60401b16808369ffffffff000000000000198416171784556bffff000000000000000000006110dc60a08701610e2b565b60501b16836bffffffffffff00000000000019841617821717845550505061114e61110960c08401611022565b82547fffffffffffffffffffffffff0000000000000000ffffffffffffffffffffffff1660609190911b73ffffffffffffffff00000000000000000000000016178255565b61036261115d60e08401611022565b82547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff1660a09190911b7bffffffffffffffff000000000000000000000000000000000000000016178255565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016111e8576111e86111c0565b5060010190565b60008219821115611202576112026111c0565b500190565b60006020828403121561121957600080fd5b5051919050565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0384138115161561125a5761125a6111c0565b82600160ff1b038412811615611272576112726111c0565b50500190565b600060ff821660ff810361128e5761128e6111c0565b60010192915050565b6000828210156112a9576112a96111c0565b500390565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000841360008413858304851182821616156112ef576112ef6111c0565b600160ff1b600087128682058812818416161561130e5761130e6111c0565b6000871292508782058712848416161561132a5761132a6111c0565b87850587128184161615611340576113406111c0565b505050929093029392505050565b6000600160ff1b8203611363576113636111c0565b5060000390565b600060ff821660ff841680821015611384576113846111c0565b9003939250505056fea26469706673582212200f2e278ee4e9ea047bd3248fb9465fac2d24c3ae81fa96526118cc73e9e0080864736f6c634300080d0033608060405234801561001057600080fd5b50610b1e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80637779815c116100cd578063a3c35e2c11610081578063dee4c1a611610066578063dee4c1a614610392578063ea6e4e52146103a3578063fca6fbf2146103eb57600080fd5b8063a3c35e2c14610239578063d74dcaca1461035957600080fd5b806397c71faf116100b257806397c71faf14610333578063a34123a714610346578063a3a1e7e91461030657600080fd5b80637779815c1461030657806386c8e9a71461031d57600080fd5b80632a99a792116101245780635e622abc116101095780635e622abc146102c25780636719578c146102c95780636d87989a146102f457600080fd5b80632a99a792146102395780634c2ebc581461025957600080fd5b806302dc9951146101565780630d8f6f461461017e578063195cd92c1461019f5780631dce5fcf14610217575b600080fd5b6001546101659062ffffff1681565b60405162ffffff90911681526020015b60405180910390f35b61019161018c36600461071f565b610404565b604051908152602001610175565b6101b26101ad36600461074d565b610419565b6040516101759190600060e082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a08301516001600160a01b0380821660a08501528060c08601511660c0850152505092915050565b61022a6102253660046107ab565b6104c7565b604051610175939291906107fc565b61024c610247366004610840565b6105b3565b6040516101759190610873565b6102c061026736600461089e565b60408051608081018252948552602080860194855285820193845260608601928352600297880b600090815280825282812097890b81529690529094209251835590516001830155519281019290925551600390910155565b005b6000610191565b6003546102dc906001600160a01b031681565b6040516001600160a01b039091168152602001610175565b6102c06103023660046108f3565b5050565b701400000000000000000000000000000000610191565b600154610165906301000000900462ffffff1681565b61019161034136600461071f565b610630565b61022a6103543660046107ab565b61063e565b6102c0610367366004610915565b600293840b6000908152602085815260408083209590960b8252939093529290912090815560010155565b6102c06103a0366004610957565b50565b6102c06103b136600461096f565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600154610165906601000000000000900462ffffff1681565b600061041382610f9f196109a2565b92915050565b61046b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b831515600084130361049d576020810183905261048783610a42565b61049390610fa06109a2565b60408201526104c0565b610fa06104a984610a42565b6104b39190610a5e565b6020820152604081018390525b9392505050565b6000806104f56040518060800160405280600081526020016000815260200160008152602001600081525090565b836fffffffffffffffffffffffffffffffff16600460008282546105199190610a9a565b9091555050600286810b6000908152602082815260408083209389900b8352929052206001015461055d906fffffffffffffffffffffffffffffffff861690610ab2565b600287810b600090815260208281526040808320938a900b8352929052205490935061059c906fffffffffffffffffffffffffffffffff861690610ab2565b91506105a886866105b3565b905093509350939050565b6105de6040518060800160405280600081526020016000815260200160008152602001600081525090565b50600291820b60009081526020818152604080832093850b8352928152908290208251608081018452815481526001820154928101929092529283015491810191909152600390910154606082015290565b6000610413610fa083610a5e565b60008061066c6040518060800160405280600081526020016000815260200160008152602001600081525090565b836fffffffffffffffffffffffffffffffff16600460008282546106909190610ad1565b9091555050600286810b6000908152602082815260408083209389900b835292905220546106d1906fffffffffffffffffffffffffffffffff861690610ab2565b600287810b600090815260208281526040808320938a900b83529290522060010154909250610713906fffffffffffffffffffffffffffffffff861690610ab2565b92506105a886866105b3565b60006020828403121561073157600080fd5b5035919050565b6001600160a01b03811681146103a057600080fd5b60008060006060848603121561076257600080fd5b8335801515811461077257600080fd5b925060208401359150604084013561078981610738565b809150509250925092565b8035600281900b81146107a657600080fd5b919050565b6000806000606084860312156107c057600080fd5b6107c984610794565b92506107d760208501610794565b915060408401356fffffffffffffffffffffffffffffffff8116811461078957600080fd5b8381526020810183905260c081016108386040830184805182526020810151602083015260408101516040830152606081015160608301525050565b949350505050565b6000806040838503121561085357600080fd5b61085c83610794565b915061086a60208401610794565b90509250929050565b8151815260208083015190820152604080830151908201526060808301519082015260808101610413565b60008060008060008060c087890312156108b757600080fd5b6108c087610794565b95506108ce60208801610794565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000806040838503121561090657600080fd5b50508035926020909101359150565b6000806000806080858703121561092b57600080fd5b61093485610794565b935061094260208601610794565b93969395505050506040820135916060013590565b600060c0828403121561096957600080fd5b50919050565b60006020828403121561098157600080fd5b81356104c081610738565b634e487b7160e01b600052601160045260246000fd5b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000841360008413858304851182821616156109e3576109e361098c565b600160ff1b6000871286820588128184161615610a0257610a0261098c565b60008712925087820587128484161615610a1e57610a1e61098c565b87850587128184161615610a3457610a3461098c565b505050929093029392505050565b6000600160ff1b8203610a5757610a5761098c565b5060000390565b600082610a7b57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610a9557610a9561098c565b500590565b60008219821115610aad57610aad61098c565b500190565b6000816000190483118215151615610acc57610acc61098c565b500290565b600082821015610ae357610ae361098c565b50039056fea26469706673582212202e65a65ca0d854001f3612c507b4e82e0a27fffc670f982ee5fd06eb07e9b60b64736f6c634300080d0033';

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
    this.contractName = 'CollateralDepositSetTest';
  }

  deploy(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralDepositSetTest> {
    return super.deploy(
      _settlementToken,
      overrides || {}
    ) as Promise<CollateralDepositSetTest>;
  }
  getDeployTransaction(
    _settlementToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_settlementToken, overrides || {});
  }
  attach(address: string): CollateralDepositSetTest {
    return super.attach(address) as CollateralDepositSetTest;
  }
  connect(signer: Signer): CollateralDepositSetTest__factory {
    return super.connect(signer) as CollateralDepositSetTest__factory;
  }
  static readonly contractName: 'CollateralDepositSetTest';
  public readonly contractName: 'CollateralDepositSetTest';
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
