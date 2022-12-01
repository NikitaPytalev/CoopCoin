import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Coop Coin Endpoints',
      version: '1.0'
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      responses: {
        authenticationError: {
          description: 'Authentication failed'
        },
        authorizationError: {
          description: 'Authorization failed'
        },
        entityNotFoundError: {
          description: 'Entity was not found'
        }
      }
    }
  },
  apis: ['./src/routes/*.{ts,js}']
};

const swaggerDocs = swaggerJsdoc(options);

/**
 * Эта функция позволяет добавить swagger ui к серверу
 */
export const useSwagger = (app: Express) => {
  app.get('/', (_req, res) => {
    res.redirect('/api-docs');
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.get('/api-docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
  });
};
