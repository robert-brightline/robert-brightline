import { UseGuards } from '@nestjs/common';
import { AuthSessionGuard } from '../guards/auth-session.guard.js';

export function AuthSession(): MethodDecorator {
  return (...args) => {
    UseGuards(AuthSessionGuard)(...args);
  };
}
