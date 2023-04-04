import { Express } from 'express';

export function setupRootModule(app: Express) {
  app.head('/', (_req, res) => res.send());
}
