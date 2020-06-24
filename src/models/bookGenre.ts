import * as Sequelize from 'sequelize';
import database from '../database/database';
import { Book } from './book';
import { Genre } from './genre';

export class BookGenre extends Sequelize.Model {
    public id!: number;
    public name!: string;
    public created_at?: Date;
    public updated_at?: Date;
}

BookGenre.init(
  {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    genre_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
},
  {
    sequelize: database.connection,
    freezeTableName: true,
    schema: 'library',
    tableName: 'book_genre',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
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

