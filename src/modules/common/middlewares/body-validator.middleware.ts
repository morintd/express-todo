import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';

import { ValidationException } from '../exceptions';

export function bodyValidator<T>(Model: new () => T) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const validator = new Model() as Record<string, unknown>;
    Object.assign(validator, req.body);

    validate(validator, { whitelist: true, forbidNonWhitelisted: true }).then((errs) => {
      if (errs.length > 0) {
        next(new ValidationException(errs));
      } else next();
    });
  };
}
