import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrmController } from './crm.controller.js';

@Module({
  imports: [ConfigModule],
  controllers: [CrmController],
})
export class CrmModule {}
