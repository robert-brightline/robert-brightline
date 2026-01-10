import { UseGuards } from '@nestjs/common';
import { LocalOtpGuard } from '../guards/local-otp.guard.js';

export function AuthLocalOtp(): MethodDecorator {
  return (...args) => {
    UseGuards(LocalOtpGuard)(...args);
  };
}
