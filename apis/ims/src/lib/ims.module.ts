import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImsController } from './ims.controller.js';

@Module({
  imports: [ConfigModule],
  controllers: [ImsController],
})
export class ImsModule {}
