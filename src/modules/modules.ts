import { Express } from 'express';

import { PrismaService } from './common';
import { TodoController, TodoModule, TodoService } from './todo';

export function setupRootModule(app: Express, prisma: PrismaService) {
  const todo = new TodoModule(new TodoController(new TodoService(prisma)));

  todo.configure(app);
  app.head('/', (_req, res) => res.send());
}
