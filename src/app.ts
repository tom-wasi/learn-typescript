import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { notFound, errorHandler } from './middleware/index.middleware';
import api from './api/index.api';
import IORedis from 'ioredis';
import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { logger } from './utils/winston';

config();

const app = express();

const redisClient = new IORedis({ host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) });
redisClient.on('error', (err) => logger.info('Redis Client Error', err));

;
app.use(
  session({
    store: new RedisStore({ client: redisClient as IORedis }),
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/", api);
app.use(notFound);
app.use(errorHandler);

export default app;