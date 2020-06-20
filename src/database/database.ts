import * as Sequelize from 'sequelize';
import * as databaseConfig from './database.config';

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    this.connection = new Sequelize.Sequelize(databaseConfig);
    await this.connection.createSchema('library', {}).catch(() => null)
  }
}

const database: Database = new Database();

export default database;