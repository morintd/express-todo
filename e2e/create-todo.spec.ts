import supertest from 'supertest';

describe('POST /todo', () => {
  it('Should return created todo', () => {
    return supertest('http://localhost:3000')
      .post('/todo')
      .send({
        title: 'TODO create title',
        content: 'TODO create content',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: 2,
          title: 'TODO create title',
          content: 'TODO create content',
        });
      });
  });
});
