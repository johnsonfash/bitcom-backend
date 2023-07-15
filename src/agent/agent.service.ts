import { Injectable } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';

@Injectable()
export class AgentService {
  constructor(private mysql: MysqlService) { }

  async getAgents() {
    return this.mysql.query(`select * from agentname`)
  }
}
