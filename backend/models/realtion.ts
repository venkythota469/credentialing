import sequelize from "../config/database";
import InsuranceCompany from "./insuranceCompany";
import Provider from "./Provider";


InsuranceCompany.belongsTo(Provider, { foreignKey: 'providerId', targetKey: 'providerId', as: 'Provider' });
Provider.hasMany(InsuranceCompany, { foreignKey: 'providerId', sourceKey: 'providerId', as: 'InsuranceCompany' });
InsuranceCompany.belongsTo(Provider, { foreignKey: 'providerId', targetKey: 'providerId', as: 'provider' });



const syncModels = async () => {
    try {
      const isDev = false; 
  
      await Promise.all([
       Provider.sync({ alter: isDev }),
       InsuranceCompany.sync({ alter:isDev}),
      
      ]);
  
      console.log('Database synchronized successfully');
    } catch (error) {
      console.error('Database synchronization failed:', error);
    }
  };
  
  const dbInit = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await syncModels();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  dbInit();
  
  export default dbInit;