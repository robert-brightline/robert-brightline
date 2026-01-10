import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtKeys } from '../common/jwt-keys.js';
import type { JwtPayload } from '../common/jwt-payload.js';

@Injectable()
export class AuthSessionStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(ConfigService) protected readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow(JwtKeys.JWT_SECRET),
    });
  }

  async validate(payload: JwtPayload) {
    return payload;
  }
}
