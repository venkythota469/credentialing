
// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('postgres', 'postgres', 'Venky@1234', {
//   host: 'localhost',
//   port: 5432,
//   dialect: 'postgres',
// });

// const connectDatabase = async (): Promise<void> => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', (error as Error).message);
//   }
// };

// connectDatabase();

// export default sequelize;




import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT as 'postgres',
  }
);

const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', (error as Error).message);
  }
};

connectDatabase();

export default sequelize;
