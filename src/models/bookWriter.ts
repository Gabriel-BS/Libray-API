import * as Sequelize from 'sequelize';
import database from '../database/database';
import { Book } from './book';
import { Writer } from './writer';

export class BookWriter extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public created_at?: Date;
  public updated_at?: Date;
}

BookWriter.init(
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
    tableName: 'book_writer',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

BookWriter.belongsTo(Book, {
    foreignKey: 'book_id',
    keyType: Sequelize.INTEGER
})

BookWriter.belongsTo(Writer, {
    foreignKey: 'writer_id',
    keyType: Sequelize.INTEGER
})
