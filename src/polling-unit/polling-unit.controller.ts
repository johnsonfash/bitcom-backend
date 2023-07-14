import { Body, Controller, Get, Ip, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PollingUnitService } from './polling-unit.service';
import { PollingUnitDto } from './dto';

@Controller('polling-units')
export class PollingUnitController {
  constructor(private pollingUnitService: PollingUnitService) { }

  @Get(':id')
  getAllPollingUnits() {
    return this.pollingUnitService.getAllPollingUnits();
  }

  @Get(':id')
  pollingUnit(@Param('id', ParseIntPipe) id: number) {
    return this.pollingUnitService.getPollingUnitResults(id);
  }

  @Post('/create')
  createPollingUnitAndResult(@Body() dto: PollingUnitDto, @Ip() ip: string) {
    return this.pollingUnitService.createPollingUnitResult(dto, ip);
  }
}
