import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PmsController } from './pms.controller.js';

@Module({
  imports: [ConfigModule],
  controllers: [PmsController],
})
export class PmsModule {}
