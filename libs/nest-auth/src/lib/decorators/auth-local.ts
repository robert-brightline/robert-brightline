import { UseGuards } from '@nestjs/common';
import { LocalGuard } from '../guards/local.guard.js';

export function AuthLocal(): MethodDecorator {
  return (...args) => {
    UseGuards(LocalGuard)(...args);
  };
}
