import { createNamedProvider } from '@robert-brightline/nest-common';
import type { AuthService } from '../services/auth.service.js';

export const {
  inject: InjectAuthService,
  token: getAuthServiceToken,
  provideFactory: provideAuthServiceFactory,
  provideValue: provideAuthServiceInstance,
  provideClass: provideAuthServiceClass,
} = createNamedProvider<AuthService>('AuthService');
