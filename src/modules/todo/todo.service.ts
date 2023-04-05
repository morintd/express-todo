import { PrismaService } from '../common';

import { TodoToCreateDTO } from './dto';

export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(todo: TodoToCreateDTO) {
    return this.prisma.todo.create({ data: todo });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }
}
