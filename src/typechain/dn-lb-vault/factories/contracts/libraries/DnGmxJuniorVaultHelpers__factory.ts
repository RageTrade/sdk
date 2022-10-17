/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  DnGmxJuniorVaultHelpers,
  DnGmxJuniorVaultHelpersInterface,
} from '../../../contracts/libraries/DnGmxJuniorVaultHelpers';

const _abi = [
  {
    inputs: [],
    name: 'ArraysLengthMismatch',
    type: 'error',
  },
];

const _bytecode =
  '0x61271a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061012b5760003560e01c80637ce594d2116100b7578063a20bf5301161007b578063a20bf530146102ab578063e1bffb7e146102be578063e496ab94146102d1578063e686ee66146102e4578063fcd2dd69146102f757600080fd5b80637ce594d2146102225780638492718f146102355780638684b697146102485780638738eaba146102685780638ba2e58d1461027b57600080fd5b806350726708116100fe57806350726708146101c357806351df9f72146101d657806355b51a6d146101e95780635a69be9d146101fc578063751f05401461020f57600080fd5b806316c01932146101305780631a1ae172146101565780633cb67675146101795780634362de421461019b575b600080fd5b61014361013e36600461212c565b610317565b6040519081526020015b60405180910390f35b61016961016436600461216a565b610538565b604051901515815260200161014d565b81801561018557600080fd5b50610199610194366004612183565b610574565b005b6101ae6101a936600461216a565b610846565b6040805192835260208301919091520161014d565b6101436101d13660046121b5565b61085b565b6101ae6101e43660046121ed565b610870565b6101696101f736600461216a565b61088a565b61014361020a366004612219565b61091a565b6101ae61021d36600461223c565b61092f565b6101436102303660046121ed565b610947565b610143610243366004612219565b610954565b81801561025457600080fd5b5061019961026336600461223c565b610960565b61014361027636600461212c565b61096e565b61028e61028936600461225e565b61097b565b60408051938452602084019290925215159082015260600161014d565b6101696102b93660046121ed565b61099d565b6101436102cc36600461229b565b6109aa565b6101696102df36600461216a565b6109b6565b6101436102f236600461216a565b610a0b565b81801561030357600080fd5b506101996103123660046122cb565b610a18565b600080836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610358573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037c9190612306565b601086015460405163b3596f0760e01b81526001600160a01b03878116600483015260ff9390931693506000929091169063b3596f0790602401602060405180830381865afa1580156103d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f79190612330565b905060008461047c576010870154601e88015460405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104749190612330565b9050806104f4565b6010870154601d88015460405163b3596f0760e01b81526001600160a01b03918216600482015291169063b3596f0790602401602060405180830381865afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f09190612330565b9050805b5061052d68327cb2734119d3b7a9601e1b61051060068661235f565b61051b90600a61245a565b6105259084612466565b849190610a2c565b979650505050505050565b600e8101546000906901000000000000000000810463ffffffff169061056d90610100900467ffffffffffffffff164261235f565b1192915050565b6000806105818684610a4b565b915091506000610592878484610a90565b601d8801549091506000906105b19089906001600160a01b0316610b35565b905060006105d18383848c601701546105ca919061235f565b9190610a2c565b905060006105de8a610bb9565b9050808211156107935760006105f4828461235f565b60028c015460405163150ef26160e21b81523060048201529192506000916001600160a01b039091169063543bc984906024016020604051808303816000875af1158015610646573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066a9190612330565b90508082111561070657866106898d6106838487612485565b88610c56565b90995097506106998d828a610e0e565b81156107005760028d015460405163317afabb60e21b8152600481018490526001600160a01b039091169063c5ebeaec90602401600060405180830381600087803b1580156106e757600080fd5b505af11580156106fb573d6000803e3d6000fd5b505050505b5061077f565b6107118c8889610e0e565b60028c01546001600160a01b031663c5ebeaec61072e858761235f565b6040518263ffffffff1660e01b815260040161074c91815260200190565b600060405180830381600087803b15801561076657600080fd5b505af115801561077a573d6000803e3d6000fd5b505050505b61078c8c898d8a8e610ed2565b505061083a565b6107a08a878b888c610ed2565b60008060006107ae8d611409565b915091506107bd8d8383610a90565b925050506107cb8b826114ea565b60028b01546001600160a01b031663371fd8e66107e8858561235f565b6040518263ffffffff1660e01b815260040161080691815260200190565b600060405180830381600087803b15801561082057600080fd5b505af1158015610834573d6000803e3d6000fd5b50505050505b50505050505050505050565b60008061085283611409565b91509150915091565b600061086884848461156f565b949350505050565b60008061087e858585610c56565b91509150935093915050565b600f810154604051632fe4a15f60e21b815230600482015260009182916001600160a01b039091169063bf92857c9060240160c060405180830381865afa1580156108d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fd919061249d565b9550505050505082600b0154655af3107a400061056d9190612466565b600061092683836116aa565b90505b92915050565b60008061093c8484610a4b565b915091509250929050565b6000610868848484610a90565b600061092683836117fd565b61096a82826114ea565b5050565b6000610868848484610317565b600080600061098c8787878761191e565b9250925092505b9450945094915050565b60006108688484846119d2565b60006109268383611a29565b60008060006109c484611409565b915091506000806109df866109da8860006116aa565b610a4b565b915091506109ee8683866119d2565b8015610a005750610a008682856119d2565b159695505050505050565b60006109298260006116aa565b610a258585858585610ed2565b5050505050565b828202811515841585830485141716610a4457600080fd5b0492915050565b60208201546000908190610a6a9085906001600160a01b03168561156f565b601f850154909250610a879085906001600160a01b03168561156f565b90509250929050565b601f830154600090610ac490610ab09086906001600160a01b0316611a29565b839068327cb2734119d3b7a9601e1b610a2c565b6020850154610af590610ae19087906001600160a01b0316611a29565b859068327cb2734119d3b7a9601e1b610a2c565b610aff9190612485565b601d8501549091506108689068327cb2734119d3b7a9601e1b90610b2d9087906001600160a01b0316611a29565b839190610a2c565b600f82015460405163c44b11f760e01b81526001600160a01b038381166004830152600092839291169063c44b11f790602401602060405180830381865afa158015610b85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba991906124e7565b5160101c61ffff16949350505050565b6000610bc88260070154611b31565b600d83015460128401546040516370a0823160e01b8152306004820152610c42916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3d9190612330565b611b31565b610c4c9190612537565b6109299190612537565b6000806000610c7784858860170154610c6f919061235f565b879190610a2c565b60218701546020880154604051632acbceb560e21b81526001600160a01b03918216600482015292935060009291169063ab2f3ad490602401602060405180830381865afa158015610ccd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf19190612330565b6021880154601f890154604051632acbceb560e21b81526001600160a01b03918216600482015292935060009291169063ab2f3ad490602401602060405180830381865afa158015610d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6b9190612330565b6020890154909150600090610d8a908a906001600160a01b0316611a29565b601f8a0154909150600090610da9908b906001600160a01b0316611a29565b9050610dd9610dc468327cb2734119d3b7a9601e1b86612466565b83610dcf8688612485565b610c6f9190612466565b9650610dff610df468327cb2734119d3b7a9601e1b85612466565b82610dcf8688612485565b95505050505050935093915050565b6000610e29610e1d838561235f565b846105ca8760006116aa565b90506000610e3b610ab08660006117fd565b90508460070154811115610e86576000856007015482610e5b919061235f565b9050610e678682611b79565b866007016000828254610e7a9190612485565b90915550610a25915050565b8460070154811015610a25576000818660070154610ea4919061235f565b905080866007016000828254610eba919061235f565b90915550610eca90508682611d4c565b505050505050565b6060806000806000610efd8a8b60200160009054906101000a90046001600160a01b03168b8b61191e565b9250925092506000806000610f2b8d8e601f0160009054906101000a90046001600160a01b03168c8c61191e565b9250925092508c600a0154851015610f465760009550600094505b8c600a0154821015610f5b5760009250600091505b600084610f685786610f6a565b855b9050600082610f795784610f7b565b835b905081158015610f89575080155b15610f9d5750505050505050505050610a25565b858015610fa75750825b1561105d5760408051600180825281830190925290602080830190803683375050604080516001808252818301909252929c509050602080830190803683370190505098508e601d0160009054906101000a90046001600160a01b03168a60008151811061101757611017612576565b6001600160a01b03909216602092830291909101909101526110398183612485565b8960008151811061104c5761104c612576565b6020026020010181815250506113f8565b811580611068575080155b1561118e5760408051600180825281830190925290602080830190803683375050604080516001808252818301909252929c509050602080830190803683370190505098508161112057856110ca5760208f01546001600160a01b03166110d9565b601d8f01546001600160a01b03165b8a6000815181106110ec576110ec612576565b60200260200101906001600160a01b031690816001600160a01b031681525050818960008151811061104c5761104c612576565b8261113857601f8f01546001600160a01b0316611147565b601d8f01546001600160a01b03165b8a60008151811061115a5761115a612576565b60200260200101906001600160a01b031690816001600160a01b031681525050808960008151811061104c5761104c612576565b60408051600280825260608201835290916020830190803683375050604080516002808252606082018352939d50929150602083019080368337019050509850856111e65760208f01546001600160a01b03166111f5565b601d8f01546001600160a01b03165b8a60008151811061120857611208612576565b60200260200101906001600160a01b031690816001600160a01b0316815250508261124057601f8f01546001600160a01b031661124f565b601d8f01546001600160a01b03165b8a60018151811061126257611262612576565b60200260200101906001600160a01b031690816001600160a01b0316815250508960018151811061129557611295612576565b60200260200101516001600160a01b03168a6000815181106112b9576112b9612576565b60200260200101516001600160a01b031611156113b75760008a6000815181106112e5576112e5612576565b602002602001015190508a60018151811061130257611302612576565b60200260200101518b60008151811061131d5761131d612576565b60200260200101906001600160a01b031690816001600160a01b031681525050808b60018151811061135157611351612576565b60200260200101906001600160a01b031690816001600160a01b031681525050818a60008151811061138557611385612576565b602002602001018181525050828a6001815181106113a5576113a5612576565b602002602001018181525050506113f8565b81896000815181106113cb576113cb612576565b60200260200101818152505080896001815181106113eb576113eb612576565b6020026020010181815250505b6108348f8b8b8b8b8a8a8d8b611f4b565b60138101546040516370a0823160e01b815230600482015260009182916001600160a01b03909116906370a0823190602401602060405180830381865afa158015611458573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147c9190612330565b60148401546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156114c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108529190612330565b60006114f582611b31565b905082600d015481131561153d5761151f610c3d8485600d01548461151a9190612537565b611b79565b83600d016000828254611532919061258c565b9091555061156a9050565b82600d015481121561156a57611562838285600d015461155d9190612537565b611d4c565b600d83018190555b505050565b6021830154604051632acbceb560e21b81526001600160a01b038481166004830152600092839291169063ab2f3ad490602401602060405180830381865afa1580156115bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e39190612330565b905060008560210160009054906101000a90046001600160a01b03166001600160a01b031663dc8f5fac6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561163c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116609190612330565b9050600061166f8760006117fd565b9050600061167d8888611a29565b905061169e61168c8388612466565b6116968386612466565b869190610a2c565b98975050505050505050565b6000806116d468327cb2734119d3b7a9601e1b6116c88686156117fd565b60078701549190610a2c565b90508261170c576018840154611709906116fb90600160a01b900461ffff166127106125cd565b829061ffff16612710610a2c565b90505b602484015460408051635841507560e01b8152905183926001600160a01b03169163584150759160048083019260209291908290030181865afa158015611757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177b9190612330565b601a8601546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156117c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e99190612330565b6117f39190612485565b6108689190612485565b602282015460405163019c8a3b60e11b8152821515600482015260009182916001600160a01b0390911690630339147690602401602060405180830381865afa15801561184e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118729190612330565b9050600084601c0160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ef9190612330565b905061191568327cb2734119d3b7a9601e1b6105258369d3c21bcecceda1000000612466565b95945050505050565b60008060008385111561199557611935848661235f565b601888015490935061198a9061195890600160b01b900461ffff166127106125cd565b6119669061ffff1685612466565b61197e68327cb2734119d3b7a9601e1b612710612466565b6105ca8a8a6001610317565b915060009050610993565b61199f858561235f565b60188801549093506119c29061195890600160b01b900461ffff166127106125f0565b9150600190509450945094915050565b6000808284116119eb576119e6848461235f565b6119f5565b6119f5838561235f565b600e860154909150611a1f906d0100000000000000000000000000900461ffff1684612710610a2c565b1015949350505050565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a8e9190612306565b601085015460405163b3596f0760e01b81526001600160a01b03868116600483015260ff9390931693506000929091169063b3596f0790602401602060405180830381865afa158015611ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b099190612330565b905061191568327cb2734119d3b7a9601e1b611b26846002612485565b610b2d90600a61245a565b6000600160ff1b8210611b755760405162461bcd60e51b81526020600482015260086024820152674f766572666c6f7760c01b604482015260640160405180910390fd5b5090565b601982015460009079ffffffffffffffffffffffffffffffffffffffffffffffffffff16821015611bac57506000610929565b6000611bd168327cb2734119d3b7a9601e1b611bc98660006117fd565b859190610a2c565b6023850154601d86015460188701549293506001600160a01b0391821692630f3aa55492909116908490611c2490611c1690600160a01b900461ffff166127106125cd565b889061ffff16612710610a2c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039093166004840152602483019190915260448201523060648201526084016020604051808303816000875af1158015611c95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb99190612330565b50601d8401546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611d04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d289190612330565b601d850154909250611d459085906001600160a01b031684612042565b5092915050565b601d820154611d679083906001600160a01b031683306120bc565b6021820154601d8301546040516340d3096b60e11b81526001600160a01b03918216600482015260009291909116906381a612d690602401602060405180830381865afa158015611dbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611de09190612330565b6018840154909150600090611e2c90611e0690600160a01b900461ffff166127106125cd565b611e149061ffff1684612466565b611bc961271068327cb2734119d3b7a9601e1b612466565b9050611ec1611e3d6012600a61245a565b85601d0160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb69190612306565b610b2d90600a612616565b602485810154601d870154604051634ce3696f60e11b81526001600160a01b0391821660048201529283018790526044830184905292935091909116906399c6d2de906064015b6020604051808303816000875af1158015611f27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a259190612330565b8651885114611f6d576040516307e11acb60e51b815260040160405180910390fd5b600e8901805460ff1916600117905560168901546040805160208101899052908101879052606081018690526080810185905283151560a082015282151560c08201526001600160a01b0390911690635c38449e9030908b908b9060e0016040516020818303038152906040526040518563ffffffff1660e01b8152600401611ff99493929190612672565b600060405180830381600087803b15801561201357600080fd5b505af1158015612027573d6000803e3d6000fd5b505050600e909901805460ff19169055505050505050505050565b600f83015460405163617ba03760e01b81526001600160a01b03848116600483015260248201849052306044830152600060648301529091169063617ba03790608401600060405180830381600087803b15801561209f57600080fd5b505af11580156120b3573d6000803e3d6000fd5b50505050505050565b600f840154604051631a4ca37b60e21b81526001600160a01b038581166004830152602482018590528381166044830152909116906369328dec90606401611f08565b6001600160a01b038116811461211457600080fd5b50565b8035801515811461212757600080fd5b919050565b60008060006060848603121561214157600080fd5b833592506020840135612153816120ff565b915061216160408501612117565b90509250925092565b60006020828403121561217c57600080fd5b5035919050565b6000806000806080858703121561219957600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000606084860312156121ca57600080fd5b8335925060208401356121dc816120ff565b929592945050506040919091013590565b60008060006060848603121561220257600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561222c57600080fd5b82359150610a8760208401612117565b6000806040838503121561224f57600080fd5b50508035926020909101359150565b6000806000806080858703121561227457600080fd5b843593506020850135612286816120ff565b93969395505050506040820135916060013590565b600080604083850312156122ae57600080fd5b8235915060208301356122c0816120ff565b809150509250929050565b600080600080600060a086880312156122e357600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60006020828403121561231857600080fd5b815160ff8116811461232957600080fd5b9392505050565b60006020828403121561234257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561237157612371612349565b500390565b600181815b808511156123b157816000190482111561239757612397612349565b808516156123a457918102915b93841c939080029061237b565b509250929050565b6000826123c857506001610929565b816123d557506000610929565b81600181146123eb57600281146123f557612411565b6001915050610929565b60ff84111561240657612406612349565b50506001821b610929565b5060208310610133831016604e8410600b8410161715612434575081810a610929565b61243e8383612376565b806000190482111561245257612452612349565b029392505050565b600061092683836123b9565b600081600019048311821515161561248057612480612349565b500290565b6000821982111561249857612498612349565b500190565b60008060008060008060c087890312156124b657600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b6000602082840312156124f957600080fd5b6040516020810181811067ffffffffffffffff8211171561252a57634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b60008083128015600160ff1b85018412161561255557612555612349565b6001600160ff1b038401831381161561257057612570612349565b50500390565b634e487b7160e01b600052603260045260246000fd5b600080821280156001600160ff1b03849003851316156125ae576125ae612349565b600160ff1b83900384128116156125c7576125c7612349565b50500190565b600061ffff838116908316818110156125e8576125e8612349565b039392505050565b600061ffff80831681851680830382111561260d5761260d612349565b01949350505050565b600061092660ff8416836123b9565b6000815180845260005b8181101561264b5760208185018101518683018201520161262f565b8181111561265d576000602083870101525b50601f01601f19169290920160200192915050565b6000608082016001600160a01b038088168452602060808186015282885180855260a087019150828a01945060005b818110156126bf5785518516835294830194918301916001016126a1565b5050858103604087015287518082529082019350915080870160005b838110156126f7578151855293820193908201906001016126db565b50505050828103606084015261052d818561262556fea164736f6c634300080a000a';

type DnGmxJuniorVaultHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DnGmxJuniorVaultHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DnGmxJuniorVaultHelpers__factory extends ContractFactory {
  constructor(...args: DnGmxJuniorVaultHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DnGmxJuniorVaultHelpers> {
    return super.deploy(overrides || {}) as Promise<DnGmxJuniorVaultHelpers>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DnGmxJuniorVaultHelpers {
    return super.attach(address) as DnGmxJuniorVaultHelpers;
  }
  override connect(signer: Signer): DnGmxJuniorVaultHelpers__factory {
    return super.connect(signer) as DnGmxJuniorVaultHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DnGmxJuniorVaultHelpersInterface {
    return new utils.Interface(_abi) as DnGmxJuniorVaultHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DnGmxJuniorVaultHelpers {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DnGmxJuniorVaultHelpers;
  }
}
