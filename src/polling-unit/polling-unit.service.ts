import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';

@Injectable()
export class PollingUnitService {
  constructor(private mysql: MysqlService) { }

  async getPollingUnitResults(pollingUnit: number) {
    return await this.mysql
      .query(`select 
    polling_unit.*,
    announced_pu_results.* 
    from polling_unit left join announced_pu_results 
    on polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid 
    where polling_unit.uniqueid = ?`, [pollingUnit]);
  }
}
