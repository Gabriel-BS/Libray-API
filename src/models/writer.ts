import * as Sequelize from 'sequelize';
import database from '../database/database';

class Writer extends Sequelize.Model {
  public id!: number;
  public name!: string;
}

Writer.init(
  {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
    schema: 'library',
    tableName: 'writer'
  }
)

export default Writer;