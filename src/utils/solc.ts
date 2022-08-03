import * as solc from 'solc';

interface solCompile {
  abi: any[];
  bytecode: string;
}

const compileContract = async (
  title: string,
  content: string,
): Promise<solCompile> => {
  const input = {
    language: 'Solidity',
    sources: {
      'test.sol': {
        content,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  for (const contractName in output.contracts['test.sol']) {
    const contract = output.contracts['test.sol'][contractName];
    return { abi: contract.abi, bytecode: contract.evm.bytecode.object };
  }
};

export { compileContract };
