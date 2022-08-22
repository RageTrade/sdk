/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  SignedFullMathTest,
  SignedFullMathTestInterface,
} from '../../../contracts/test/SignedFullMathTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'a',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'denominator',
        type: 'uint256',
      },
    ],
    name: 'mulDiv',
    outputs: [
      {
        internalType: 'uint256',
        name: 'result',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'b',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'denominator',
        type: 'int256',
      },
    ],
    name: 'mulDiv',
    outputs: [
      {
        internalType: 'int256',
        name: 'result',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'denominator',
        type: 'uint256',
      },
    ],
    name: 'mulDiv',
    outputs: [
      {
        internalType: 'int256',
        name: 'result',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'denominator',
        type: 'uint256',
      },
    ],
    name: 'mulDivRoundingDown',
    outputs: [
      {
        internalType: 'int256',
        name: 'result',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'a',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'b',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'denominator',
        type: 'int256',
      },
    ],
    name: 'mulDivRoundingDown',
    outputs: [
      {
        internalType: 'int256',
        name: 'result',
        type: 'int256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'a',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'b',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'denominator',
        type: 'uint256',
      },
    ],
    name: 'mulDivRoundingUp',
    outputs: [
      {
        internalType: 'uint256',
        name: 'result',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x6080806040523461001657610574908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b6000803560e01c9182630af8b27f1461009057505080637972563e14610087578063aa9a09121461007e578063b81461a014610075578063cf8281361461006c5763fb8a0ac414610064575b600080fd5b61005f61023b565b5061005f610221565b5061005f6101c3565b5061005f6101a9565b5061005f610145565b346101095761009e3661010d565b919391906100ad82828761025c565b9482156100dc57096100c2575b506020918152f35b6000198310156100d95750600160209201916100ba565b80fd5b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526012600452fd5b5080fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc606091011261005f57600435906024359060443590565b503461005f5760206101563661010d565b909190610164818484610354565b9260008412928361018e575b505050610180575b604051908152f35b61018990610499565b610178565b6101a1935061019c90610529565b610516565b388080610170565b503461005f5760206101786101bd3661010d565b9161025c565b503461005f5760206101d43661010d565b91906101e1838284610435565b926000841292836101fb5750505061018057604051908152f35b6101a1935061021561020f61021b92610529565b93610529565b91610529565b91610516565b503461005f5760206101786102353661010d565b91610435565b503461005f57602061017861024f3661010d565b91610354565b1561005f57565b909160001983830992808302928380861095039480860395146102d657908291610287868411610255565b0981806000031680920460028082600302188083028203028083028203028083028203028083028203028083028203028092029003029360018380600003040190848311900302920304170290565b505091506102e5821515610255565b0490565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f80000000000000000000000000000000000000000000000000000000000000008114610347575b60000390565b61034f6102e9565b610341565b6000811293926103d7926103d292861561040557600160001981837f80000000000000000000000000000000000000000000000000000000000000000582126000851316166103f8575b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff05138816166103eb575b60000361025c565b61040a565b916103de57565b906103e890610319565b90565b6103f36102e9565b6103ca565b6104006102e9565b61039e565b61025c565b7f800000000000000000000000000000000000000000000000000000000000000081101561005f5790565b6104749161046c6104656103d29396959660016000821260001461047c575061045f600091610319565b9361047f565b909661047f565b95909161025c565b91156103de57565b90935b919060008312156103e857610495901592610319565b9190565b600081129060001991817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313811516610509575b817f8000000000000000000000000000000000000000000000000000000000000000038312166104fd570190565b6105056102e9565b0190565b6105116102e9565b6104cf565b9291906000930961052357565b60019150565b60008113156105355790565b6103e89061031956fea264697066735822122025c18566598a682b5fb64a1eb8d1a3ae6ebd7558671d126d73ab2760bf827d4f64736f6c634300080e0033';

type SignedFullMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignedFullMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignedFullMathTest__factory extends ContractFactory {
  constructor(...args: SignedFullMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignedFullMathTest> {
    return super.deploy(overrides || {}) as Promise<SignedFullMathTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignedFullMathTest {
    return super.attach(address) as SignedFullMathTest;
  }
  override connect(signer: Signer): SignedFullMathTest__factory {
    return super.connect(signer) as SignedFullMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignedFullMathTestInterface {
    return new utils.Interface(_abi) as SignedFullMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignedFullMathTest {
    return new Contract(address, _abi, signerOrProvider) as SignedFullMathTest;
  }
}
