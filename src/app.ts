import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import dataSource from './data/dataSource';
import authEndpoints from './routes/authRoutes';
import itemEndpoints from './routes/itemRoutes';
import purchaseEndpoints from './routes/purchaseRoutes';
import transactionEndpoints from './routes/transactionRoutes';
import userEndpoints from './routes/userRoutes';
import { useSwagger } from './services/swaggerService';

dataSource
  .initialize()
  .then(() => console.log('Connection has been established.'))
  .catch((err) => console.error('Error during Data Source initialization:', err));

const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.json());

useSwagger(app);

app.use(authEndpoints);
app.use(itemEndpoints);
app.use(purchaseEndpoints);
app.use(transactionEndpoints);
app.use(userEndpoints);
