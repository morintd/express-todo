import { NextFunction, Response } from 'express';

import { TodoService } from './todo.service';
import { TodoToCreateDTO } from './dto';

export class TodoController {
  constructor(private service: TodoService) {}

  create(res: Response, next: NextFunction, todoToCreate: TodoToCreateDTO) {
    this.service
      .create(todoToCreate)
      .then((todo) => {
        res.status(201).json(todo);
      })
      .catch((e) => next(e));
  }

  findAll(res: Response, next: NextFunction) {
    this.service
      .findAll()
      .then((todos) => res.status(200).json(todos))
      .catch((e) => next(e));
  }
}
