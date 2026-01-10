import { UseGuards } from '@nestjs/common';
import { AuthPermissionGuard } from '../guards/auth-permission.guard.js';
import { AuthSessionGuard } from '../guards/auth-session.guard.js';

export function AuthPermission(): MethodDecorator {
  return (...args) => {
    UseGuards(AuthSessionGuard, AuthPermissionGuard)(...args);
  };
}
