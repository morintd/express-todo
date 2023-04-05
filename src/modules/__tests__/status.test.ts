import supertest from 'supertest';

import { createApp } from '../../server/app';
import { PrismaService } from '../common';

describe('HEAD /', () => {
  const app = createApp(new PrismaService());

  it('Should return a success response', () => {
    return supertest(app).head('/').send().expect(200);
  });
});
