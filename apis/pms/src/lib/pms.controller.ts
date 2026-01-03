import { Controller, Get } from '@nestjs/common';

@Controller('pms')
export class PmsController {
  @Get('hello')
  get() {
    return { message: 'Hello pms' };
  }
}
