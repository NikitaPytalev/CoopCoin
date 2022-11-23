import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import dataSource from './data/dataSource';
import jwt from 'jsonwebtoken';

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

// middleware
app.use(express.json());

app.get('/ping', async (_req, res) => {
  res.send({
    message: 'pong'
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const user = { email: email };

  const accessToken = jwt.sign(user, 'TEST_SECRET');

  res.json({
    accessToken
  });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
