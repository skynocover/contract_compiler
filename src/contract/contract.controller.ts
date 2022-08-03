import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
// defined response type
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { ContractDto } from './dto/contract.dt';

@Controller('contract')
@ApiTags('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}
  @Post('compile')
  create(@Body() contractDto: ContractDto) {
    return this.contractService.compile(contractDto);
  }
}
