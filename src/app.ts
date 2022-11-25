import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import dataSource from './data/dataSource';
import auth from './middlewares/auth';
import * as authService from './services/authService';
import * as userService from './services/userService';

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

app.post('/signup', async (req, res) => {
  const user = req.body;

  const isSignedUp = await authService.signUp(user);

  if (!isSignedUp) res.status(409).send('User already exists');

  res.sendStatus(201);
});

app.post('/login', async (req, res) => {
  const credentials = req.body;

  const accessToken = await authService.login(credentials);

  if (accessToken == '') {
    res.sendStatus(401);
  } else {
    res
      .json({
        accessToken
      })
      .status(200);
  }
});

app.get('/users', auth, async (_req, res) => {
  const users = await userService.getAllUsers();

  res
    .send({
      users
    })
    .status(200);
});

app.get('/ping', auth, async (_req, res) => {
  res
    .send({
      message: 'pong'
    })
    .status(200);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
