import type { PrismaClient } from '@prisma/client/extension';
import { createNamedProvider } from '@robert-brightline/nest';

export const {
  inject: InjectClient,
  provideFactory: provideClientFactory,
  provideValue: provideClientValue,
  token: getClientToken,
} = createNamedProvider<PrismaClient>('prisma-client');
