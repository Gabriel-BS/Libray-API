import * as Sequelize from 'sequelize';
import database from '../database/database';

export class User extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public lastName!: string;
  public cpf!: string;
  public birthDate!: string;
  public email!: string;
  public phone!: string;
  public created_at?: Date;
  public updated_at?: Date;
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'lastName'
    },
    cpf: {
      type: Sequelize.STRING,
      field: 'cpf',
      unique: true
    },
    birth_date: {
      type: Sequelize.DATE,
      field: 'birth_date'
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    },
    phone: {
      type: Sequelize.STRING,
      field: 'phone'
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
    schema: 'library',
    tableName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)