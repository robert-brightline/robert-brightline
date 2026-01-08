export interface UserCredentialService<User = any> {
  validateUserByCredentials(
    username: string,
    password: string,
  ): User | Promise<User>;
}
