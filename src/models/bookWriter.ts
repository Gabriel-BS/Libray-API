import * as Sequelize from 'sequelize';
import database from '../database/database';
import Book from './book';
import Writer from './writer';

class BookWriter extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
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
    tableName: 'writer'
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


export default BookWriter;
