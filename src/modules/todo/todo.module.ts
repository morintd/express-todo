import { Express, Router } from 'express';

import { bodyValidator } from '../common';

import { TodoController } from './todo.controller';
import { TodoToCreateDTO } from './dto';

export class TodoModule {
  constructor(private controller: TodoController) {}

  private get routes() {
    const router = Router();

    router.post('/', bodyValidator(TodoToCreateDTO), (req, res, next) => {
      const todo = req.body as TodoToCreateDTO;

      this.controller.create(res, next, todo);
    });

    router.get('/', (_req, res, next) => {
      this.controller.findAll(res, next);
    });

    return router;
  }

  configure(app: Express) {
    app.use('/todo', this.routes);
  }
}
