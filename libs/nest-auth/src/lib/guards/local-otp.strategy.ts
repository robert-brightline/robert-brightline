import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InjectUserService } from '../providers/user-service.provider.js';
import type { AuthService } from '../services/auth.service.js';

@Injectable()
export class LocalOtpStrategy extends PassportStrategy(Strategy, 'local-otp') {
  constructor(@InjectUserService() private authService: AuthService) {
    super();
  }

  async validate<User>(username: string, otp: string): Promise<User> {
    const user = await this.authService.validateOtp(username, otp);
    if (user == undefined) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
