import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import applicationError from './middlewares/application.error';
import routes from './routes';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

server.use(applicationError);

server.listen(process.env.APP_PORT || 3333);
