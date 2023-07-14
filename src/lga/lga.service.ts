import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';

@Injectable()
export class LgaService {
  constructor(private mysql: MysqlService) { }

  async getAllLgas() {
    return await this.mysql.query(`select * from lga`);
  }

  async getLgaResult(lgaId: number) {
    return await this.mysql
      .query(`SELECT lga.uniqueid, lga.lga_name, announced_pu_results.party_abbreviation, SUM(party_score) AS total, announced_pu_results.date_entered FROM announced_pu_results LEFT JOIN polling_unit ON announced_pu_results.polling_unit_uniqueid = polling_unit.uniqueid LEFT JOIN lga ON lga.lga_id = polling_unit.lga_id WHERE lga.uniqueid = ? GROUP BY party_abbreviation`, [lgaId]);
  }
}
