import { ConfigService } from '@nestjs/config';
import { createConnection } from 'mysql2';
export declare class MysqlService {
    connect: ReturnType<typeof createConnection>;
    see: any;
    constructor(config: ConfigService);
    query(statement: string, placeholder?: any[]): Promise<unknown>;
    execute(statement: string, placeholder?: any[]): Promise<unknown>;
}
