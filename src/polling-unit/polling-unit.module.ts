import { Module } from '@nestjs/common';
import { PollingUnitController } from './polling-unit.controller';
import { PollingUnitService } from './polling-unit.service';

@Module({
  controllers: [PollingUnitController],
  providers: [PollingUnitService]
})
export class PollingUnitModule {}
