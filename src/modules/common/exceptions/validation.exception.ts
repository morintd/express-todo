import { ValidationError } from 'class-validator';

import { HttpException } from './http.exception';

export class ValidationException extends HttpException<ValidationError[]> {
  constructor(body?: ValidationError[]) {
    super(400, body);
  }
}
