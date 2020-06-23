import * as Sequelize from 'sequelize';
import * as databaseConfig from './database.config';

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    //create a connection to database
    this.connection = new Sequelize.Sequelize(databaseConfig);
    
    //check if schema existe
    const schema = await this.connection.showAllSchemas({}) as []

    if(!(schema.find((value) => (value === 'library')))){
      this.connection.createSchema('library', {})
    }
  }
}

const database: Database = new Database();

export default database;