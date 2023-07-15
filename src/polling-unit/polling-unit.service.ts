import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';
import { PollingUnitDto } from './dto';

@Injectable()
export class PollingUnitService {
  constructor(private mysql: MysqlService) { }

  async getPollingUnitResults(pollingUnit: number) {
    return await this.mysql
      .execute(`select 
    polling_unit.*,
    announced_pu_results.* 
    from polling_unit left join announced_pu_results 
    on polling_unit.uniqueid = announced_pu_results.polling_unit_uniqueid 
    where polling_unit.uniqueid = ?`, [pollingUnit]);
  }

  async getAllPollingUnits() {
    return await this.mysql.query(`select uniqueid, polling_unit_name, polling_unit_number, lat, long from polling_unit`)
  }

  async createPollingUnitResult(dto: PollingUnitDto, ip: string) {
    const results = dto.results.map(result => ([dto.pollingUnitId, result.party, result.score, dto.name, new Date().toISOString().slice(0, 19).replace('T', ' '), ip]))
    return await this.mysql.query(`insert into announced_pu_results (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address) values ?`, [results])
  }
}
