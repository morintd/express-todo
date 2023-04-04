/* eslint-disable no-console */
import http from 'http';

import { Config, ConfigService, PrismaService } from '../modules';

import { createApp } from './app';

export async function createServer() {
  const prisma = new PrismaService();
  await prisma.$connect();

  const app = createApp();
  const server: http.Server = http.createServer(app);

  const config = new ConfigService();
  const port = config.getNumber(Config.Port);

  server.listen(port);
  server.on('error', (e: Error) => console.log('Error', e));
  server.on('listening', () => console.log(`Server started on port ${port} on env ${config.get(Config.NodeEnv)}`));

  return server;
}
