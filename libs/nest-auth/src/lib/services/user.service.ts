
export type AuthUserPermission = {
  resouceName: string;
  operationName: string;
};

export type AuthUser = {
  username: string;
  password: string;
  tokenVersion: string;
  otp: string;
  permissions: AuthUserPermission[];
};

export interface UserService {
  findOneByUsername(username: string): Promise<AuthUser>;
}
