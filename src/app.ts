import express from 'express';
import fileUpload from 'express-fileupload';
import dataSource from './data/dataSource';
import authEndpoints from './routes/authRoutes';
import itemEndpoints from './routes/itemRoutes';
import purchaseEndpoints from './routes/purchaseRoutes';
import transactionEndpoints from './routes/transactionRoutes';
import userEndpoints from './routes/userRoutes';
import cors from 'cors';
import { useSwagger } from './services/swaggerService';

/**
 * Регистрация всех компонентов системы
 */

dataSource
  .initialize()
  .then(() => console.log('Connection has been established.'))
  .catch((err) => console.error('Error during Data Source initialization:', err));

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: '*'
  })
);
app.use(express.json());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
  })
);

useSwagger(app);

app.use(authEndpoints);
app.use(itemEndpoints);
app.use(purchaseEndpoints);
app.use(transactionEndpoints);
app.use(userEndpoints);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
