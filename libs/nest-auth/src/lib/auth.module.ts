import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import type { Any } from '@robert-brightline/types';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({})),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        const secret = config.getOrThrow<string>('JWT_TOKEN') as string;
        const expiresIn = config.getOrThrow(
          'JWT_EXPIRES_IN',
          '60econds',
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
