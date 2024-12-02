import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Provider from '../models/Provider';

class InsuranceCompany extends Model {
  public id!: number;
  public providerId!: number;
  public name!: string;
  // Add other fields as needed
}

InsuranceCompany.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: false, // userId must be present as a foreign key
        references: {
          model:Provider, // Reference to the User model
          key: 'providerId',
        },
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as needed
  },
  {
    sequelize,
    modelName: 'InsuranceCompany',
  }
);

export default InsuranceCompany;

