import supertest from 'supertest';

import { createApp } from '../../server/app';

describe('HEAD /', () => {
  const app = createApp();

  it('Should return a success response', () => {
    return supertest(app).head('/').send().expect(200);
  });
});
