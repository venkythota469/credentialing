
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Define the attributes for the Provider model
interface ProviderAttributes {
  providerId?: number; // Sequelize auto-generates the ID
  nuccGrouping: string;
  providerType: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
  addressType: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
  primaryPracticeState: string;
  birthDate: Date;
  emailType: string;
  emailAddress: string;
  socialSecurityNumber: string;
  npiNumber: string;
  deaNumber?: string;
  licenseState: string;
  licenseNumber: string;
  hasNoIndividualNPI: boolean;
  hasNoDEA: boolean;
  hasNoProfessionalLicense: boolean;
  createdAt?: Date; // Managed by Sequelize
  updatedAt?: Date; // Managed by Sequelize
}

// Define optional attributes for creating a Provider
type ProviderCreationAttributes = Optional<
  ProviderAttributes,
  'providerId' | 'middleName' | 'suffix' | 'street2' | 'deaNumber' | 'createdAt' | 'updatedAt'
>;

// Extend Sequelize's Model class
class Provider
  extends Model<ProviderAttributes, ProviderCreationAttributes>
  implements ProviderAttributes
{
  public providerId!: number;
  public nuccGrouping!: string;
  public providerType!: string;
  public firstName!: string;
  public middleName?: string;
  public lastName!: string;
  public suffix?: string;
  public addressType!: string;
  public street1!: string;
  public street2?: string;
  public city!: string;
  public state!: string;
  public zipCode!: string;
  public primaryPracticeState!: string;
  public birthDate!: Date;
  public emailType!: string;
  public emailAddress!: string;
  public socialSecurityNumber!: string;
  public npiNumber!: string;
  public deaNumber?: string;
  public licenseState!: string;
  public licenseNumber!: string;
  public hasNoIndividualNPI!: boolean;
  public hasNoDEA!: boolean;
  public hasNoProfessionalLicense!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define the Provider model
Provider.init(

  {

    providerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nuccGrouping: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    providerType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    suffix: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    primaryPracticeState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    emailType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    socialSecurityNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    npiNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    deaNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    licenseState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasNoIndividualNPI: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hasNoDEA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hasNoProfessionalLicense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'providers-1',
  }
);

export default Provider;
