import { MysqlService } from 'src/mysql/mysql.service';
import { PollingUnitDto } from './dto';
export declare class PollingUnitService {
    private mysql;
    constructor(mysql: MysqlService);
    getPollingUnitResults(pollingUnit: number): Promise<unknown>;
    getAllPollingUnits(): Promise<unknown>;
    createPollingUnitResult(dto: PollingUnitDto, ip: string): Promise<unknown>;
}
