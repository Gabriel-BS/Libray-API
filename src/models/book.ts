import * as Sequelize from 'sequelize';
import database from '../database/database';
import { Writer } from './writer';
import { Genre } from './genre';

export class Book extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public created_at?: Date;
  public updated_at?: Date;
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
    tableName: 'book',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

Book.belongsToMany(Writer, {
  through: 'book_writer',
  as: 'writers',
  foreignKey: 'book_id',
  otherKey: 'writer_id'
});

Book.belongsToMany(Genre, {
  through: 'book_genre',
  as: 'genres',
  foreignKey: 'book_id',
  otherKey: 'genre_id'
});

