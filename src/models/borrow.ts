import * as Sequelize from 'sequelize';
import database from '../database/database';
import { Book } from './book';
import { User } from './user';

export class Borrow extends Sequelize.Model {
    public id!: number;
    public name!: string;
    public created_at?: Date;
    public updated_at?: Date;
}

Borrow.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize: database.connection,
      freezeTableName: true,
      schema: 'library',
      tableName: 'borrow',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )
  
  Borrow.belongsTo(Book, {
      foreignKey: 'book_id',
      keyType: Sequelize.INTEGER,
  })
  
  Borrow.belongsTo(User, {
      foreignKey: 'user_id',
      keyType: Sequelize.INTEGER
})
