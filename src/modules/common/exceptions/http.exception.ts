export class HttpException<T = undefined> extends Error {
  status: number;
  body?: T;

  constructor(status: number, body?: T) {
    super();

    this.status = status;
    this.body = body;
  }
}
