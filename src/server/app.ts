import express, { Express, Request, Response } from 'express';
import logger from 'morgan';

import { setupRootModule } from '../modules';

export function createApp() {
  const app = express();

  configureApp(app);
  setupRootModule(app);

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
