import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import type { Any } from '@robert-brightline/types';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvKeys } from '../common/env-keys.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(ConfigService) protected readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow(EnvKeys.JWT_TOKEN),
    });
  }

  async validate(payload: Any) {
    return { userId: payload.sub, username: payload.username };
  }
}
