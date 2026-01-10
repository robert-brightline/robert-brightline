import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import type { Any } from '@robert-brightline/types';
import { JwtKeys } from './common/jwt-keys.js';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        const secret = config.getOrThrow<string>(JwtKeys.JWT_SECRET) as string;
        const expiresIn = config.getOrThrow(
          JwtKeys.JWT_EXPIRES_IN,
          '60seconds',
        ) as string;
        return {
          global: true,
          secret,
          signOptions: {
            expiresIn: expiresIn as Any,
          },
        };
      },
    }),
  ],

  controllers: [],
  providers: [],
})
export class AuthModule {}
