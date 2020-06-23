import * as Sequelize from 'sequelize';
import database from '../database/database';
import Book from './book';
import Genre from './genre';

class BookGenre extends Sequelize.Model {
    public id!: number;
    public name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

BookGenre.init(
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
    tableName: 'BookGenre'
  },
)


BookGenre.belongsTo(Book, {
    foreignKey: 'book_id',
    keyType: Sequelize.INTEGER
})

BookGenre.belongsTo(Genre, {
    foreignKey: 'genre_id',
    keyType: Sequelize.INTEGER
});

export default BookGenre;