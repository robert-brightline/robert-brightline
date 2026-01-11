import { Controller, Post } from '@nestjs/common';
import { Body, ParamUser, PublicOperation } from '@robert-brightline/nest';
import type { Any } from '@robert-brightline/types';
import { AuthLocalOtp } from './decorators/auth-local-otp.js';
import { AuthLocal } from './decorators/auth-local.js';
import { AuthSession } from './decorators/auth-session.js';
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
  login(@Body(LoginSchema) body: Login, @ParamUser() user: Any) {
    return user;
  }

  @AuthLocalOtp()
  @Post('login-otp')
  loginOpt(@Body(LoginOtpSchema) body: LoginOtp) {
    return body;
  }

  @AuthSession()
  @Post('logout')
  logout() {
    return {};
  }

  @PublicOperation()
  @Post('forgot-password')
  forgotPassword(@Body(ForgotPasswordSchema) body: ForgotPassword) {
    return body;
  }

  @AuthSession()
  @Post('reset-password')
  resetPassword(@Body(ResetPasswordSchema) body: ResetPassword) {
    return body;
  }
}
