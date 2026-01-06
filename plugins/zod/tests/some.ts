import { PrismaClient } from './prisma/client.js';

function some() {
  const client = new PrismaClient({} as any).category;

  client.update({ where: { id: 1 }, data: { name: '' } });
}
