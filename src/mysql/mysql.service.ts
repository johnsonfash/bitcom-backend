import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPool } from 'mysql2';
import { CONSTANTS } from 'src/common';

@Injectable()
export class MysqlService {
  connect: ReturnType<typeof createPool>;
  constructor(config: ConfigService) {
    this.connect = createPool({
      host: config.get(CONSTANTS.DATABASE_HOST),
      user: config.get(CONSTANTS.DATABASE_USER),
      password: config.get(CONSTANTS.DATABASE_PASSWORD),
      database: config.get(CONSTANTS.DATABASE_NAME),
      waitForConnections: true,
      connectionLimit: 10,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    })
  }

  query(statement: string, placeholder: any[] = []) {
    return new Promise((resolve, reject) => {
      this.connect.query(statement, placeholder, (err, results: any) => {
        if (err) return reject(err)
        resolve(results?.length ? results?.length === 1 ? results[0] : results : null)
      })
    })
  }

  execute(statement: string, placeholder: any[] = []) {
    return new Promise((resolve, reject) => {
      this.connect.execute(statement, placeholder, (err, results: any) => {
        if (err) return reject(err)
        resolve(results?.length ? results?.length === 1 ? results[0] : results : null)
      })
    })
  }
}