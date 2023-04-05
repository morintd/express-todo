import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed(): Promise<void> {
  await prisma.todo.create({
    data: {
      title: 'TODO example title',
      content: 'TODO example content',
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
