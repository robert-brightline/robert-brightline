import { Controller, Post } from '@nestjs/common';
import { Body, UserInfo } from '@robert-brightline/nest';
import type { Any } from '@robert-brightline/types';
import { AuthLocal } from './decorators/auth-local.js';
import type {
  ForgotPassword,
  Login,
  LoginOtp,
  ResetPassword,
} from './schemas/auth-schemas.js';
import {
  ForgotPasswordSchema,
  LoginOtpSchema,
  LoginSchema,
  ResetPasswordSchema,
} from './schemas/auth-schemas.js';

@Controller('auth')
export class AuthController {
  @AuthLocal()
  @Post('login')
  login(@Body(LoginSchema) body: Login, @UserInfo() user: Any) {
    return user;
  }

  @Post('login-otp')
  loginOpt(@Body(LoginOtpSchema) body: LoginOtp) {
    return {};
  }

  @Post('logout')
  logout() {
    return {};
  }

  @Post('forgot-password')
  forgotPassword(@Body(ForgotPasswordSchema) body: ForgotPassword) {
    return {};
  }

  @Post('reset-password')
  resetPassword(@Body(ResetPasswordSchema) body: ResetPassword) {
    return {};
  }
}
