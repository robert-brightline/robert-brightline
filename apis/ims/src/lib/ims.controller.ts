import { Controller, Get } from '@nestjs/common';

@Controller('ims')
export class ImsController {
  @Get('hello')
  get() {
    return { message: 'Hello ims' };
  }
}
