import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import type { UserCredentialService } from '../services/user-credential.service.js';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userCredentialService: UserCredentialService) {
    super();
  }

  // Passport automatically calls this method after extracting credentials
  async validate(username: string, password: string): Promise<any> {
    const user = await this.userCredentialService.validateUserByCredentials(
      username,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
