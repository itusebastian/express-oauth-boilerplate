const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Express OAuth Boilerplate API',
    description: 'A clean, ready-to-use Express.js OAuth boilerplate with Google authentication'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Bearer token for API requests'
    }
  }
};

const outputFile = './swagger.json';
const routes = ['./src/routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
