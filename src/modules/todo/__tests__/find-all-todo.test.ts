import { Express } from 'express';
import { generatePrismock } from 'prismock';

import { PrismaService } from '../../common';
import { createApp } from '../../../server/app';
import supertest from 'supertest';

describe('GET /todo', () => {
  let prisma: PrismaService;
  let app: Express;

  beforeAll(async () => {
    prisma = await generatePrismock();
    await prisma.todo.create({
      data: {
        title: 'TODO example title',
        content: 'TODO example content',
      },
    });

    app = createApp(prisma);
  });

  it('Should return all todo', () => {
    return supertest(app)
      .get('/todo')
      .send()
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([
          {
            id: 1,
            title: 'TODO example title',
            content: 'TODO example content',
          },
        ]);
      });
  });

  it('Should return an error 500 on unknown error', () => {
    jest.spyOn(prisma.todo, 'findMany').mockRejectedValueOnce(new Error('mock-error'));

    return supertest(app).get('/todo').send().expect(500);
  });
});
