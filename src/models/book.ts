import * as Sequelize from 'sequelize';
import database from '../database/database';
import BookWriter from './writer';
import Writer from './writer';

class Book extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
}

Book.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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

Book.belongsToMany(Writer, {
  through: 'BookWriter',
  as: 'writer',
  foreignKey: 'productId',
  otherKey: 'orderId'
});

export default Book;