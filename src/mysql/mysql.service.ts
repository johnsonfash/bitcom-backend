import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createConnection } from 'mysql2'
import { CONSTANTS } from 'src/common';

@Injectable()
export class MysqlService {
  connect: ReturnType<typeof createConnection>;
  see: any
  constructor(config: ConfigService) {
    this.connect = createConnection({
      host: config.get(CONSTANTS.DATABASE_HOST),
      user: config.get(CONSTANTS.DATABASE_USER),
      password: config.get(CONSTANTS.DATABASE_PASSWORD),
      database: config.get(CONSTANTS.DATABASE_NAME)
    })
  }

  query(statement: string, placeholder: (string | number | boolean)[] = []) {
    return new Promise((resolve, reject) => {
      this.connect.execute(statement, placeholder, (err, results: any) => {
        if (err) return reject(err)
        resolve(results?.length ? results?.length === 1 ? results[0] : results : null)
      })
    })
  }
}