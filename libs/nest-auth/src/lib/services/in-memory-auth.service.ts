import type { AuthService } from './auth.service.js';

export type AuthUser = {
  username: string;
  password: string;
  tokenVersion: string;
  otp: string;
  permissions: string;
};

export class InMemoryAuthService implements AuthService {
  protected readonly users: AuthUser[] = [];
  
  validateCredential(username: string, password: string) {
    throw new Error('Method not implemented.');
  }

  validateOtp(username: string, otp: string) {
    throw new Error('Method not implemented.');
  }
}
