import * as Sequelize from 'sequelize';
import database from '../database/database';
import Book from './book';
import User from './user';

class Borrow extends Sequelize.Model {
    public id!: number;
    public name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Borrow.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    },
    {
      sequelize: database.connection,
      freezeTableName: true,
      schema: 'library',
      tableName: 'writer'
    }
  )
  
  Borrow.belongsTo(Book, {
      foreignKey: 'book_id',
      keyType: Sequelize.INTEGER
  })
  
  Borrow.belongsTo(User, {
      foreignKey: 'user_id',
      keyType: Sequelize.INTEGER
  })
export default borrow;