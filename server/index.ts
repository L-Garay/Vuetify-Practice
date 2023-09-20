// eslint-disable-next-line @typescript-eslint/no-var-requires
const Hapi = require('@hapi/hapi');
import { registerUser } from './controllers/UserController';
import { connectDatabase } from './connectDatabase';

const start = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        headers: ['Accept', 'Content-Type']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: any, h) => {
      const response = h.response({ user: 'Hello World!' });
      response.header('Access-Control-Allow-Origin', '*');
      return response;
    }
  });

  server.route({
    method: 'POST',
    path: '/register',
    handler: (request: any, h) => {
      console.log('request payload', request.payload);
      const user = registerUser(request.payload);
      console.log('user after register', user);
      const response = h.response(user);
      response.type('application/json');
      response.header('Access-Control-Allow-Origin', '*');
      return response;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);

  try {
    connectDatabase();
  } catch (error) {
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
