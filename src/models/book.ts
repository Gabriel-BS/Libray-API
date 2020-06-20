import * as Sequelize from 'sequelize';
import database from '../database/database';

class Book extends Sequelize.Model {
  public id!: number;
  public name!: string;
}

Book.init(
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
    tableName: 'book'
  }
)

export default Book;