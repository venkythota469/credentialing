


import express, { Application } from 'express';
import cors from 'cors';
import sequelize from './config/database';
import providerRoutes from './routes/providerRoutes';
import dbInit from './models/realtion';
import insu from './routes/insu';

const app: Application = express();
const port: number = parseInt(process.env.PORT || '5000', 10);

app.use(cors());
app.use(express.json());
dbInit();
// Use provider routes
app.use('/api', providerRoutes);
app.use('/api',insu);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error: Error) => {
  console.error('Error syncing the database:', error.message);
});
