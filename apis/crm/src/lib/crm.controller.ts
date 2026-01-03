import { Controller, Get } from '@nestjs/common';

@Controller('crm')
export class CrmController {
  @Get('hello')
  get() {
    return { message: 'Hello crm' };
  }
}
