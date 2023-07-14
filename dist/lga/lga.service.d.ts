import { MysqlService } from 'src/mysql/mysql.service';
export declare class LgaService {
    private mysql;
    constructor(mysql: MysqlService);
    getAllLgas(): Promise<unknown>;
    getLgaResult(lgaId: number): Promise<unknown>;
}
