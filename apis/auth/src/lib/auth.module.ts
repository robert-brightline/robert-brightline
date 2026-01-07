import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { PrismaClient } from '@robert-brightline/auth-db/client';
import {
  prismaExceptionFilter,
  zodExceptionFilter,
} from '@robert-brightline/nest';
import { PrismaModule } from '@robert-brightline/nest-prisma';
import { ZodError } from 'zod';
import { UserModule } from './resources/user/user.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PrismaModule.forRoot(PrismaClient),
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: prismaExceptionFilter(),
    },
    {
      provide: APP_FILTER,
      useClass: zodExceptionFilter(ZodError),
    },
  ],
})
export class AuthModule {}
