import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from './mysql/mysql.module';
import { LgaModule } from './lga/lga.module';
import { PollingUnitModule } from './polling-unit/polling-unit.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MysqlModule, LgaModule, PollingUnitModule]
})
export class AppModule { }
