import * as Sequelize from 'sequelize';
import database from '../database/database';

class borrow extends Sequelize.Model {
    public id!: number;
    public name!: string;
}

borrow.init(
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
        user_id: {
            type: Sequelize.INTEGER,
            field: 'genre_id'
        }
    },

    {
        sequelize: database.connection,
        freezeTableName: true,
        schema: 'library',
        tableName: 'borrow'
    },


)
export default borrow;