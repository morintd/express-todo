import express, { NextFunction, Request, Response } from 'express';
import { IsBoolean } from 'class-validator';
import supertest from 'supertest';

import { HttpException } from '../../exceptions';
import { bodyValidator } from '../body-validator.middleware';

class MockDTO {
  @IsBoolean()
  property!: boolean;
}

const app = express();
app.use(express.json());

app.post('/', bodyValidator(MockDTO), (_req, res) => {
  res.status(201).send();
});

app.use((error: HttpException, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status).send();
});

describe('body-validator (middleware)', () => {
  it('Should allow request when body is valid', () => {
    return supertest(app).post('/').send({ property: true }).expect(201);
  });

  it('Should return a validation error when body is invalid', () => {
    return supertest(app).post('/').send({}).expect(400);
  });
});
