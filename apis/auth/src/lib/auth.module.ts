import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaClient } from '@robert-brightline/auth-db/client';
import {
  provideAppExceptionFilter,
  provideCrudEventInterceptor,
} from '@robert-brightline/nest';
import { PrismaModule } from '@robert-brightline/nest-prisma';
import { UserModule } from './resources/user/user.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    PrismaModule.forRoot(PrismaClient),
    UserModule,
  ],
  providers: [provideAppExceptionFilter(), provideCrudEventInterceptor()],
})
export class AuthModule {}
