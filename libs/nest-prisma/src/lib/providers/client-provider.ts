import type { PrismaClient } from '@prisma/client/extension';
import { createNamedProvider } from '@robert-brightline/nest-common';

export const {
  inject: InjectClient,
  provideFactory: provideClientFactory,
  provideValue: provideClientValue,
  token: getClientToken,
} = createNamedProvider<PrismaClient>('prisma-client');
