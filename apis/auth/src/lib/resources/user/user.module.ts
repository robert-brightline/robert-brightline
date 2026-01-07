import { Module } from '@nestjs/common';
import { PrismaModule } from '@robert-brightline/nest-prisma';
import { UserController } from './user.controller.js';

@Module({
  imports: [PrismaModule.forFeature(['user'], 'auth')],
  controllers: [UserController],
})
export class UserModule {}
