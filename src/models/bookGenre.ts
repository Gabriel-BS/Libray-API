import * as Sequelize from 'sequelize';
import database from '../database/database';

class BookGenre extends Sequelize.Model {
    public id!: number;
    public name!: string;
}

BookGenre.init(
    {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        book_id: {
            type: Sequelize.INTEGER,
            field: 'book_id'
        },
        genre_id: {
            type: Sequelize.INTEGER,
            field: 'genre_id'
        }
    },

    {
        sequelize: database.connection,
        freezeTableName: true,
        schema: 'library',
        tableName: 'BookGenre'
    },


)
export default BookGenre;