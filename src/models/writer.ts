import * as Sequelize from 'sequelize';
import database from '../database/database';

export class Writer extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public created_at?: Date;
  public updated_at?: Date;
}

Writer.init(
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
    tableName: 'writer',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)