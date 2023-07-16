import { MysqlService } from 'src/mysql/mysql.service';
export declare class AgentService {
    private mysql;
    constructor(mysql: MysqlService);
    getAgents(): Promise<unknown>;
}
