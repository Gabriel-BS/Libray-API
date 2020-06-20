import * as Sequelize from 'sequelize';
import database from '../database/database';

class User extends Sequelize.Model {
  public id!: number;

  public firstName!: string;

  public lastName!: string;

  public teacherUser!: boolean;

  public country!: string;

  public language!: string;

  public proUser!: boolean;

  public password!: string;

  public passwordHash!: string;

  public username!: string;

  public email!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

export default User;