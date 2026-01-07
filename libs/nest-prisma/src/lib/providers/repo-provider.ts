import { createProvider } from '@robert-brightline/nest-common';
import type { Any } from '@robert-brightline/types';

export const {
  inject: InjectRepo,
  provideFactory: provideRepoFactory,
  provideValue: provideRepoValue,
  token: getRepoToken,
} = createProvider<Any>('PRISMA_REPOSITORY');
