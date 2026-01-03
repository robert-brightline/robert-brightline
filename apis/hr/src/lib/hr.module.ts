import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HrController } from './hr.controller.js';

@Module({
  imports: [ConfigModule],
  controllers: [HrController],
})
export class HrModule {}
