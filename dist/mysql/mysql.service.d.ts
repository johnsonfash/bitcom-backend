import { ConfigService } from '@nestjs/config';
import { createPool } from 'mysql2';
export declare class MysqlService {
    connect: ReturnType<typeof createPool>;
    constructor(config: ConfigService);
    query(statement: string, placeholder?: any[]): Promise<unknown>;
    execute(statement: string, placeholder?: any[]): Promise<unknown>;
}
