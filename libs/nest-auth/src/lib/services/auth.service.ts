import type { Any } from '@robert-brightline/types';

export interface AuthService<User = Any> {
  validateCredential(username: string, password: string): User | Promise<User>;
}
