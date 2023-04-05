import express, { Express, Request, Response } from 'express';
import logger from 'morgan';

import { PrismaService, setupRootModule } from '../modules';

export function createApp(prisma: PrismaService) {
  const app = express();

  configureApp(app);
  setupRootModule(app, prisma);

  app.use((_error: Error, _req: Request, res: Response) => {
    res.status(500);
  });

  return app;
}

export function configureApp(app: Express) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}
