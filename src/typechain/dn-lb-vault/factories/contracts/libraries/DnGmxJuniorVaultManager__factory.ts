/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../../common';
import type {
  DnGmxJuniorVaultManager,
  DnGmxJuniorVaultManagerInterface,
} from '../../../contracts/libraries/DnGmxJuniorVaultManager';

const _abi = [
  {
    inputs: [],
    name: 'ArraysLengthMismatch',
    type: 'error',
  },
];

const _bytecode =
  '0x61286961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101515760003560e01c8063928516f2116100d2578063c6444b0711610096578063e01baf4f11610070578063e01baf4f14610344578063e491c7da14610357578063e784a93a1461036a57600080fd5b8063c6444b071461030b578063d4a118f41461031e578063deaaf6be1461033157600080fd5b8063928516f21461029f57806395caf168146102bf578063ab42ed57146102d2578063b4e4ef87146102e5578063bead085c146102f857600080fd5b80635941106d116101195780635941106d1461020a578063666a859c1461022c5780637f65b4a91461023f5780638227a6d91461025f5780638f1cbf421461027f57600080fd5b8063029d6ad8146101565780631b22edb91461018b578063316e3332146101ac57806335c53825146101d45780634ea69491146101f7575b600080fd5b61016961016436600461228b565b61037d565b6040805193845260208401929092521515908201526060015b60405180910390f35b61019e6101993660046122c8565b61039f565b604051908152602001610182565b6101bf6101ba3660046122fd565b6103b4565b60408051928352602083019190915201610182565b6101e76101e236600461231f565b6103cc565b6040519015158152602001610182565b6101e761020536600461231f565b610463565b81801561021657600080fd5b5061022a6102253660046122fd565b6104b8565b005b61019e61023a366004612338565b6104c6565b81801561024b57600080fd5b5061022a61025a366004612364565b6104db565b81801561026b57600080fd5b5061022a61027a36600461239f565b6104ef565b81801561028b57600080fd5b506101bf61029a36600461228b565b6107c1565b8180156102ab57600080fd5b506101bf6102ba36600461228b565b6108a8565b61019e6102cd3660046123d1565b61093e565b61019e6102e036600461231f565b61094b565b61019e6102f33660046122c8565b610958565b61019e610306366004612409565b610964565b6101bf610319366004612338565b610970565b61019e61032c366004612409565b61098a565b6101e761033f366004612338565b610996565b6101e761035236600461231f565b6109a3565b61019e610365366004612409565b6109ba565b6101bf61037836600461231f565b6109c6565b600080600061038e878787876109db565b9250925092505b9450945094915050565b60006103ab8383610a71565b90505b92915050565b6000806103c18484610bb5565b915091509250929050565b601a810154604051632fe4a15f60e21b815230600482015260009182916001600160a01b039091169063bf92857c9060240160c060405180830381865afa15801561041b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043f919061242e565b9550505050505082600d0154655af3107a400061045c919061248e565b1192915050565b600080600061047184610bfa565b9150915060008061048c86610487886000610a71565b610bb5565b9150915061049b868386610cdb565b80156104ad57506104ad868285610cdb565b159695505050505050565b6104c28282610d1d565b5050565b60006104d3848484610da7565b949350505050565b6104e88585858585610e4c565b5050505050565b6000806104fc8684610bb5565b91509150600061050d878484610da7565b601788015490915060009061052c9089906001600160a01b0316611383565b9050600061054c8383848c6006015461054591906124ad565b9190611407565b905060006105598a611426565b90508082111561070e57600061056f82846124ad565b60278c015460405163150ef26160e21b81523060048201529192506000916001600160a01b039091169063543bc984906024016020604051808303816000875af11580156105c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e591906124c4565b90508082111561068157866106048d6105fe84876124dd565b886114c3565b90995097506106148d828a61167b565b811561067b5760278d015460405163317afabb60e21b8152600481018490526001600160a01b039091169063c5ebeaec90602401600060405180830381600087803b15801561066257600080fd5b505af1158015610676573d6000803e3d6000fd5b505050505b506106fa565b61068c8c888961167b565b60278c01546001600160a01b031663c5ebeaec6106a985876124ad565b6040518263ffffffff1660e01b81526004016106c791815260200190565b600060405180830381600087803b1580156106e157600080fd5b505af11580156106f5573d6000803e3d6000fd5b505050505b6107078c898d8a8e610e4c565b50506107b5565b61071b8a878b888c610e4c565b60008060006107298d610bfa565b915091506107388d8383610da7565b925050506107468b82610d1d565b60278b01546001600160a01b031663371fd8e661076385856124ad565b6040518263ffffffff1660e01b815260040161078191815260200190565b600060405180830381600087803b15801561079b57600080fd5b505af11580156107af573d6000803e3d6000fd5b50505050505b50505050505050505050565b6025840154601885015460009182916001600160a01b039182169183918882169116146107f6576107f18861173f565b6107ff565b6107ff886117af565b6040805160a08101825282815230602082015242818301526060810189905260808101889052905163c04b8d5960e01b8152889550919250906001600160a01b0384169063c04b8d5990610857908490600401612594565b6020604051808303816000875af1158015610876573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089a91906124c4565b945050505094509492505050565b6025840154601885015460009182916001600160a01b039182169183918882169116146108dd576108d88861173f565b6108e6565b6108e6886117af565b6040805160a081018252828152306020820152428183015260608101899052608081018890529051631e51809360e31b8152889550919250906001600160a01b0384169063f28c049890610857908490600401612594565b60006104d38484846117f3565b60006103ae826000610a71565b60006103ab838361192e565b60006103ab8383611383565b60008061097e8585856114c3565b91509150935093915050565b60006103ab8383611a57565b60006104d3848484610cdb565b6000816010015482600b01544261045c91906124ad565b60006103ab8383611bed565b6000806109d283610bfa565b91509150915091565b600080600083851115610a40576109f284866124ad565b9250610a3587600f0154612710610a0991906124ad565b610a13908561248e565b610a2b68327cb2734119d3b7a9601e1b61271061248e565b6105458a8a611a57565b915060009050610395565b610a4a85856124ad565b9250610a6187600f0154612710610a0991906124dd565b9150600190509450945094915050565b600080610a9b68327cb2734119d3b7a9601e1b610a8f86861561192e565b60058701549190611407565b905082610ac457610ac184600e0154612710610ab791906124ad565b8290612710611407565b90505b602884015460408051635841507560e01b8152905183926001600160a01b03169163584150759160048083019260209291908290030181865afa158015610b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3391906124c4565b60158601546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610b7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba191906124c4565b610bab91906124dd565b6104d391906124dd565b60198201546000908190610bd49085906001600160a01b0316856117f3565b6018850154909250610bf19085906001600160a01b0316856117f3565b90509250929050565b601c8101546040516370a0823160e01b815230600482015260009182916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610c49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6d91906124c4565b601d8401546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610cb7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d291906124c4565b600080828411610cf457610cef84846124ad565b610cfe565b610cfe83856124ad565b6011860154909150610d139084612710611407565b1015949350505050565b6000610d2882611cf5565b90508260040154811315610d7557610d57610d5284856004015484610d4d91906125a7565b611d3d565b611cf5565b836004016000828254610d6a91906125e6565b90915550610da29050565b8260040154811215610da257610d9a83828560040154610d9591906125a7565b611ecc565b600483018190555b505050565b6018830154600090610ddb90610dc79086906001600160a01b0316611bed565b839068327cb2734119d3b7a9601e1b611407565b6019850154610e0c90610df89087906001600160a01b0316611bed565b859068327cb2734119d3b7a9601e1b611407565b610e1691906124dd565b60178501549091506104d39068327cb2734119d3b7a9601e1b90610e449087906001600160a01b0316611bed565b839190611407565b6060806000806000610e778a8b60190160009054906101000a90046001600160a01b03168b8b6109db565b9250925092506000806000610ea58d8e60180160009054906101000a90046001600160a01b03168c8c6109db565b9250925092508c60140154851015610ec05760009550600094505b8c60140154821015610ed55760009250600091505b600084610ee25786610ee4565b855b9050600082610ef35784610ef5565b835b905081158015610f03575080155b15610f1757505050505050505050506104e8565b858015610f215750825b15610fd75760408051600180825281830190925290602080830190803683375050604080516001808252818301909252929c509050602080830190803683370190505098508e60170160009054906101000a90046001600160a01b03168a600081518110610f9157610f91612627565b6001600160a01b0390921660209283029190910190910152610fb381836124dd565b89600081518110610fc657610fc6612627565b602002602001018181525050611372565b811580610fe2575080155b156111085760408051600180825281830190925290602080830190803683375050604080516001808252818301909252929c509050602080830190803683370190505098508161109a57856110445760198f01546001600160a01b0316611053565b60178f01546001600160a01b03165b8a60008151811061106657611066612627565b60200260200101906001600160a01b031690816001600160a01b0316815250508189600081518110610fc657610fc6612627565b826110b25760188f01546001600160a01b03166110c1565b60178f01546001600160a01b03165b8a6000815181106110d4576110d4612627565b60200260200101906001600160a01b031690816001600160a01b0316815250508089600081518110610fc657610fc6612627565b60408051600280825260608201835290916020830190803683375050604080516002808252606082018352939d50929150602083019080368337019050509850856111605760198f01546001600160a01b031661116f565b60178f01546001600160a01b03165b8a60008151811061118257611182612627565b60200260200101906001600160a01b031690816001600160a01b031681525050826111ba5760188f01546001600160a01b03166111c9565b60178f01546001600160a01b03165b8a6001815181106111dc576111dc612627565b60200260200101906001600160a01b031690816001600160a01b0316815250508960018151811061120f5761120f612627565b60200260200101516001600160a01b03168a60008151811061123357611233612627565b60200260200101516001600160a01b031611156113315760008a60008151811061125f5761125f612627565b602002602001015190508a60018151811061127c5761127c612627565b60200260200101518b60008151811061129757611297612627565b60200260200101906001600160a01b031690816001600160a01b031681525050808b6001815181106112cb576112cb612627565b60200260200101906001600160a01b031690816001600160a01b031681525050818a6000815181106112ff576112ff612627565b602002602001018181525050828a60018151811061131f5761131f612627565b60200260200101818152505050611372565b818960008151811061134557611345612627565b602002602001018181525050808960018151811061136557611365612627565b6020026020010181815250505b6107af8f8b8b8b8b8a8a8d8b6120bf565b601a82015460405163c44b11f760e01b81526001600160a01b038381166004830152600092839291169063c44b11f790602401602060405180830381865afa1580156113d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f7919061263d565b5160101c61ffff16949350505050565b82820281151584158583048514171661141f57600080fd5b0492915050565b60006114358260050154611cf5565b600483810154601b8501546040516370a0823160e01b8152309381019390935290916114af916001600160a01b0316906370a0823190602401602060405180830381865afa15801561148b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5291906124c4565b6114b991906125a7565b6103ae91906125a7565b60008060006114e4848588600601546114dc91906124ad565b879190611407565b60218701546019880154604051632acbceb560e21b81526001600160a01b03918216600482015292935060009291169063ab2f3ad490602401602060405180830381865afa15801561153a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155e91906124c4565b60218801546018890154604051632acbceb560e21b81526001600160a01b03918216600482015292935060009291169063ab2f3ad490602401602060405180830381865afa1580156115b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d891906124c4565b60198901549091506000906115f7908a906001600160a01b0316611bed565b60188a0154909150600090611616908b906001600160a01b0316611bed565b905061164661163168327cb2734119d3b7a9601e1b8661248e565b8361163c86886124dd565b6114dc919061248e565b965061166c61166168327cb2734119d3b7a9601e1b8561248e565b8261163c86886124dd565b95505050505050935093915050565b600061169661168a83856124ad565b84610545876000610a71565b905060006116a8610dc786600061192e565b905084600501548111156116f35760008560050154826116c891906124ad565b90506116d48682611d3d565b8660050160008282546116e791906124dd565b909155506104e8915050565b84600501548110156104e857600081866005015461171191906124ad565b90508086600501600082825461172791906124ad565b9091555061173790508682611ecc565b505050505050565b6019810154601882015460178301546040516bffffffffffffffffffffffff19606094851b8116602083015261017760eb1b603483015292841b83166037820152607d60ea1b604b82015290831b909116604e8201526062015b6040516020818303038152906040529050919050565b601881015460178201546040516bffffffffffffffffffffffff19606093841b81166020830152607d60ea1b603483015291831b9091166037820152604b01611799565b6021830154604051632acbceb560e21b81526001600160a01b038481166004830152600092839291169063ab2f3ad490602401602060405180830381865afa158015611843573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186791906124c4565b905060008560210160009054906101000a90046001600160a01b03166001600160a01b031663dc8f5fac6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156118c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e491906124c4565b905060006118f387600061192e565b905060006119018888611bed565b9050611922611910838861248e565b61191a838661248e565b869190611407565b98975050505050505050565b602382015460405163019c8a3b60e11b8152821515600482015260009182916001600160a01b0390911690630339147690602401602060405180830381865afa15801561197f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a391906124c4565b905060008460160160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2091906124c4565b9050611a4e68327cb2734119d3b7a9601e1b611a468369d3c21bcecceda100000061248e565b849190611407565b95945050505050565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abc919061268d565b601e85015460405163b3596f0760e01b81526001600160a01b03868116600483015260ff9390931693506000929091169063b3596f0790602401602060405180830381865afa158015611b13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b3791906124c4565b601e860154601787015460405163b3596f0760e01b81526001600160a01b03918216600482015292935060009291169063b3596f0790602401602060405180830381865afa158015611b8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb191906124c4565b9050611be368327cb2734119d3b7a9601e1b611bce6006866124ad565b611bd990600a61279b565b611a46908461248e565b9695505050505050565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c52919061268d565b601e85015460405163b3596f0760e01b81526001600160a01b03868116600483015260ff9390931693506000929091169063b3596f0790602401602060405180830381865afa158015611ca9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ccd91906124c4565b9050611a4e68327cb2734119d3b7a9601e1b611cea8460026124dd565b610e4490600a61279b565b6000600160ff1b8210611d395760405162461bcd60e51b81526020600482015260086024820152674f766572666c6f7760c01b604482015260640160405180910390fd5b5090565b60008260130154821015611d53575060006103ae565b60178301546021840154604051637092736960e11b81526001600160a01b039283166004820181905292600092169063e124e6d290602401602060405180830381865afa158015611da8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dcc91906124c4565b90506000611e0786600e0154612710611de591906124ad565b611def908461248e565b6114dc61271068327cb2734119d3b7a9601e1b61248e565b90506000611e2e68327cb2734119d3b7a9601e1b611e2689600061192e565b889190611407565b6024888101546040516303cea95560e21b81526001600160a01b038881166004830152928101849052604481018690523060648201529293501690630f3aa554906084016020604051808303816000875af1158015611e91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eb591906124c4565b9450611ec28785876121b6565b5050505092915050565b6017820154611ee79083906001600160a01b03168330612230565b602182015460178301546040516340d3096b60e11b81526001600160a01b03918216600482015260009291909116906381a612d690602401602060405180830381865afa158015611f3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f6091906124c4565b90506000611fa384600e0154612710611f7991906124ad565b611f83908461248e565b611f9b61271068327cb2734119d3b7a9601e1b61248e565b859190611407565b9050612038611fb46012600a61279b565b8560170160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015612009573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061202d919061268d565b610e4490600a6127a7565b60288501546017860154604051634ce3696f60e11b81526001600160a01b039182166004820152602481018790526044810184905292935016906399c6d2de906064015b6020604051808303816000875af115801561209b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e891906124c4565b86518851146120e1576040516307e11acb60e51b815260040160405180910390fd5b600a8901805460ff1916600117905560268901546040805160208101899052908101879052606081018690526080810185905283151560a082015282151560c08201526001600160a01b0390911690635c38449e9030908b908b9060e0016040516020818303038152906040526040518563ffffffff1660e01b815260040161216d94939291906127b6565b600060405180830381600087803b15801561218757600080fd5b505af115801561219b573d6000803e3d6000fd5b505050600a909901805460ff19169055505050505050505050565b601a83015460405163617ba03760e01b81526001600160a01b03848116600483015260248201849052306044830152600060648301529091169063617ba03790608401600060405180830381600087803b15801561221357600080fd5b505af1158015612227573d6000803e3d6000fd5b50505050505050565b601a840154604051631a4ca37b60e21b81526001600160a01b038581166004830152602482018590528381166044830152909116906369328dec9060640161207c565b6001600160a01b038116811461228857600080fd5b50565b600080600080608085870312156122a157600080fd5b8435935060208501356122b381612273565b93969395505050506040820135916060013590565b600080604083850312156122db57600080fd5b82359150602083013580151581146122f257600080fd5b809150509250929050565b6000806040838503121561231057600080fd5b50508035926020909101359150565b60006020828403121561233157600080fd5b5035919050565b60008060006060848603121561234d57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561237c57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b600080600080608085870312156123b557600080fd5b5050823594602084013594506040840135936060013592509050565b6000806000606084860312156123e657600080fd5b8335925060208401356123f881612273565b929592945050506040919091013590565b6000806040838503121561241c57600080fd5b8235915060208301356122f281612273565b60008060008060008060c0878903121561244757600080fd5b865195506020870151945060408701519350606087015192506080870151915060a087015190509295509295509295565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156124a8576124a8612478565b500290565b6000828210156124bf576124bf612478565b500390565b6000602082840312156124d657600080fd5b5051919050565b600082198211156124f0576124f0612478565b500190565b6000815180845260005b8181101561251b576020818501810151868301820152016124ff565b8181111561252d576000602083870101525b50601f01601f19169290920160200192915050565b6000815160a0845261255760a08501826124f5565b90506001600160a01b0360208401511660208501526040830151604085015260608301516060850152608083015160808501528091505092915050565b6020815260006103ab6020830184612542565b60008083128015600160ff1b8501841216156125c5576125c5612478565b6001600160ff1b03840183138116156125e0576125e0612478565b50500390565b600080821280156001600160ff1b038490038513161561260857612608612478565b600160ff1b839003841281161561262157612621612478565b50500190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561264f57600080fd5b6040516020810181811067ffffffffffffffff8211171561268057634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b60006020828403121561269f57600080fd5b815160ff811681146126b057600080fd5b9392505050565b600181815b808511156126f25781600019048211156126d8576126d8612478565b808516156126e557918102915b93841c93908002906126bc565b509250929050565b600082612709575060016103ae565b81612716575060006103ae565b816001811461272c576002811461273657612752565b60019150506103ae565b60ff84111561274757612747612478565b50506001821b6103ae565b5060208310610133831016604e8410600b8410161715612775575081810a6103ae565b61277f83836126b7565b806000190482111561279357612793612478565b029392505050565b60006103ab83836126fa565b60006103ab60ff8416836126fa565b6000608082016001600160a01b038088168452602060808186015282885180855260a087019150828a01945060005b818110156128035785518516835294830194918301916001016127e5565b5050858103604087015287518082529082019350915080870160005b8381101561283b5781518552938201939082019060010161281f565b50505050828103606084015261285181856124f5565b97965050505050505056fea164736f6c634300080a000a';

type DnGmxJuniorVaultManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DnGmxJuniorVaultManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DnGmxJuniorVaultManager__factory extends ContractFactory {
  constructor(...args: DnGmxJuniorVaultManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DnGmxJuniorVaultManager> {
    return super.deploy(overrides || {}) as Promise<DnGmxJuniorVaultManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DnGmxJuniorVaultManager {
    return super.attach(address) as DnGmxJuniorVaultManager;
  }
  override connect(signer: Signer): DnGmxJuniorVaultManager__factory {
    return super.connect(signer) as DnGmxJuniorVaultManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DnGmxJuniorVaultManagerInterface {
    return new utils.Interface(_abi) as DnGmxJuniorVaultManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DnGmxJuniorVaultManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DnGmxJuniorVaultManager;
  }
}
