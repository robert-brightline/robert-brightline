import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaClient } from '@robert-brightline/auth-db/client';
import { PrismaModule } from '@robert-brightline/nest-prisma';
import { UserModule } from './resources/user/user.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    PrismaModule.forRoot(PrismaClient, 'auth'),
    UserModule,
  ],
})
export class AuthModule {}
