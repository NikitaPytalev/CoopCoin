import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import dataSource from './data/dataSource';
import authEndpoints from './routes/authRoutes';
import itemEndpoints from './routes/itemRoutes';
import purchaseEndpoints from './routes/purchaseRoutes';
import transactionEndpoints from './routes/transactionRoutes';
import userEndpoints from './routes/userRoutes';

dataSource
  .initialize()
  .then(() => console.log('Connection has been established.'))
  .catch((err) => console.error('Error during Data Source initialization:', err));

const PORT = process.env.PORT || 8000;

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'CoopCoin API',
      version: '1.0.0'
    }
  },
  apis: ['app.ts']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(authEndpoints);
app.use(itemEndpoints);
app.use(purchaseEndpoints);
app.use(transactionEndpoints);
app.use(userEndpoints);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// router.get("/", function (req, res) {
//   res.redirect("/catalog");
// });
