import * as Sequelize from 'sequelize';
import database from '../database/database';

class Genre extends Sequelize.Model {
  public id!: number;
  public name!: string;
}

Genre.init(
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
    tableName: 'genre'
  }
)

export default Genre;