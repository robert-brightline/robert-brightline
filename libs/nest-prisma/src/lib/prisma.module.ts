import { Module, type DynamicModule } from '@nestjs/common';
import type { PrismaClient } from '@prisma/client/extension';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { names } from '@robert-brightline/names';
import { Pool } from 'pg';
import {
  getClientToken,
  provideClientFactory,
} from './providers/client-provider.js';
import { getRepoToken, provideRepoFactory } from './providers/repo-provider.js';

@Module({
  imports: [ConfigModule.forFeature(() => ({}))],
})
export class PrismaModule {
  static forRoot(
    prismaClientClass: typeof PrismaClient,
    scope = '',
  ): DynamicModule {
    return {
      module: PrismaModule,
      global: true,
      providers: [
        provideClientFactory(
          (config: ConfigService) => {
            const connectionString = config.getOrThrow('DATABASE_URL');
            const pool = new Pool({
              connectionString,
              max: 20,
              idleTimeoutMillis: 30000,
              connectionTimeoutMillis: 5000,
            });

            pool.on('error', (err) => {
              console.error('Unexpected error on idle client', err);
            });
            const adapter = new PrismaPg(pool);
            const prisma = new prismaClientClass({ adapter });
            return prisma;
          },
          [ConfigService],
          scope,
        ),
      ],
      exports: [getClientToken(scope)],
    };
  }

  static forFeature(resourceNames: string[], scope = ''): DynamicModule {
    const providedRepos = resourceNames.map((e) => {
      return provideRepoFactory(
        e,
        (client) => {
          const modelName = names(e).camel;
          return client[modelName];
        },
        [getClientToken(scope)],
        scope,
      );
    });

    const exportedRepos = resourceNames.map((e) => {
      return getRepoToken(e, scope);
    });

    return {
      module: PrismaModule,
      providers: providedRepos,
      exports: exportedRepos,
    };
  }
}
