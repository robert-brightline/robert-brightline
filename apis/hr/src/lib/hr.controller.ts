import { Controller, Get } from '@nestjs/common';

@Controller('hr')
export class HrController {
  @Get('hello')
  get() {
    return { message: 'Hello hr' };
  }
}
