import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaModule } from '@robert-brightline/nest-prisma';
import { UserController } from './user.controller.js';
import { UserListener } from './user.listener.js';

@Module({
  imports: [PrismaModule.forFeature(['user']), EventEmitterModule],
  controllers: [UserController],
  providers: [UserListener],
})
export class UserModule {}
