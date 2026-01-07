import type { Prisma } from '@robert-brightline/auth-db/client';
import type {
  UserCreateInput,
  UserFindManyArgs,
  UserUpdateInput,
} from '@robert-brightline/auth-db/models';
import {
  UserCreate,
  UserQuery,
  UserUpdate,
} from '@robert-brightline/auth-db/zod';
import { Body, ParamId, Query, Rest } from '@robert-brightline/nest';
import { InjectRepo } from '@robert-brightline/nest-prisma';

@Rest()
export class UserController {
  constructor(
    @InjectRepo('user', 'auth') protected readonly repo: Prisma.UserDelegate,
  ) {}

  create(@Body(UserCreate) data: UserCreateInput) {
    return this.repo.create({ data });
  }

  find(@Query(UserQuery) query: UserFindManyArgs) {
    console.table(query);
    return this.repo.findMany();
  }

  findById(@ParamId() id: number) {
    return this.repo.findUniqueOrThrow({ where: { id } });
  }

  update(@ParamId() id: number, @Body(UserUpdate) data: UserUpdateInput) {
    return this.repo.update({ where: { id }, data });
  }

  delete(@ParamId() id: number) {
    return this.repo.delete({ where: { id } });
  }
}
