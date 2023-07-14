import { MysqlService } from 'src/mysql/mysql.service';
export declare class PollingUnitService {
    private mysql;
    constructor(mysql: MysqlService);
    getPollingUnitResults(pollingUnit: number): Promise<unknown>;
}
