import { createNamedProvider } from '@robert-brightline/nest';
import type { UserService } from '../services/user.service.js';

export const {
  inject: InjectUserService,
  token: getUserServiceToken,
  provideFactory: provideUserServiceFactory,
  provideValue: provideUserServiceInstance,
  provideClass: provideUserServiceClass,
} = createNamedProvider<UserService>('UserService');
