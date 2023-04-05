import supertest, { Response } from 'supertest';
import { generatePrismock } from 'prismock';
import { Express } from 'express';

import { createApp } from '../../../server/app';
import { PrismaService } from '../../common';

describe('POST /todo', () => {
  let prisma: PrismaService;
  let app: Express;

  beforeAll(async () => {
    prisma = await generatePrismock();
    app = createApp(prisma);
  });

  describe('On success', () => {
    let response: Response;

    beforeAll(async () => {
      response = await supertest(app)
        .post('/todo')
        .send({
          title: 'TODO example title',
          content: 'TODO example content',
        })
        .expect(201);
    });

    it('Should return the created todo', () => {
      expect(response.body).toEqual({
        id: 1,
        title: 'TODO example title',
        content: 'TODO example content',
      });
    });

    it('Should persist created todo', async () => {
      const todo = await prisma.todo.findUnique({ where: { title: 'TODO example title' } });

      expect(todo).toEqual({
        id: 1,
        title: 'TODO example title',
        content: 'TODO example content',
      });
    });
  });

  it('Should return an error if title is not set', () => {
    return supertest(app)
      .post('/todo')
      .send({
        content: 'TODO example conte',
      })
      .expect(400);
  });

  it('Should return an error if content is not set', () => {
    return supertest(app)
      .post('/todo')
      .send({
        title: 'TODO example title',
      })
      .expect(400);
  });

  it('Should return error 500 on unknown error', () => {
    jest.spyOn(prisma.todo, 'create').mockRejectedValueOnce(new Error('mock-error'));

    return supertest(app)
      .post('/todo')
      .send({
        title: 'TODO example title',
        content: 'TODO example content',
      })
      .expect(500);
  });
});
