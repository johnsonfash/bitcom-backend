import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PollingUnitService } from './polling-unit.service';

@Controller('polling-units')
export class PollingUnitController {
  constructor(private pollingUnitService: PollingUnitService) { }

  @Get(':id')
  pollingUnit(@Param('id', ParseIntPipe) id: number) {
    return this.pollingUnitService.getPollingUnitResults(id);
  }
}
