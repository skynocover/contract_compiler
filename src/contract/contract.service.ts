import { Injectable } from '@nestjs/common';
import { ContractDto } from './dto/contract.dt';
import { compileContract } from '../utils/solc';

@Injectable()
export class ContractService {
  async compile(contractDto: ContractDto) {
    const { abi, bytecode } = await compileContract(
      contractDto.title,
      contractDto.content,
    );
    return { res: 'OK', abi, bytecode };
  }
}
