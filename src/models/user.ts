import * as Sequelize from 'sequelize';
import database from '../database/database';

class User extends Sequelize.Model {
  public id!: number;
  public name!: string;
  public lastName!: string;
  public cpf!: string;
  public birthDate!: string;
  public email!: string;
  public phone!: string;
}

User.init(
  {
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
      field: 'cpf'
    },
    birth_date: {
      type: Sequelize.STRING,
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
  }
);

export default User;