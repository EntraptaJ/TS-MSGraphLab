// src/index.ts
import 'reflect-metadata';
import { createApolloServer } from './Library/Apollo';
import { webServer } from './Library/Fastify';
import { logger, LogMode } from './Library/Logger';

logger.log(LogMode.WARN, 'Starting TS-MSGraphLab');

const apiServer = await createApolloServer();

webServer.register(
  apiServer.createHandler({
    disableHealthCheck: true,
  }),
);

await webServer.listen(8080, '0.0.0.0');

logger.log(LogMode.WARN, 'Started TS-MSGraphLab');

export {};
