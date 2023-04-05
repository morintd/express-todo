import supertest from 'supertest';

describe('GET /todo', () => {
  it('Should return all todo', () => {
    return supertest('http://localhost:3000')
      .get('/todo')
      .send()
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            {
              id: 1,
              title: 'TODO example title',
              content: 'TODO example content',
            },
          ]),
        );
      });
  });
});
