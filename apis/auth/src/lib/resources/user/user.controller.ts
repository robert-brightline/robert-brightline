import type { Prisma } from '@robert-brightline/auth-db/client';
import type {
  UserCreateInput,
  UserDefaultArgs,
  UserFindManyArgs,
  UserUpdateInput,
} from '@robert-brightline/auth-db/models';
import {
  UserCreate,
  UserProjection,
  UserQuery,
  UserUpdate,
} from '@robert-brightline/auth-db/zod';
import type { CrudController } from '@robert-brightline/nest';
import { Body, ParamId, Query, Rest } from '@robert-brightline/nest';
import { InjectRepo } from '@robert-brightline/nest-prisma';

@Rest()
export class UserController implements CrudController {
  constructor(@InjectRepo() protected readonly repo: Prisma.UserDelegate) {}

  create(@Body(UserCreate) data: UserCreateInput) {
    return this.repo.create({ data });
  }

  read(@Query(UserQuery) query: UserFindManyArgs) {
    return this.repo.findMany(query);
  }

  readOneById(
    @ParamId() id: number,
    @Query(UserProjection) query: UserDefaultArgs,
  ) {
    return this.repo.findUniqueOrThrow({ where: { id }, ...query });
  }

  update(
    @ParamId() id: number,
    @Body(UserUpdate) data: UserUpdateInput,
    @Query(UserProjection) query: UserDefaultArgs,
  ) {
    return this.repo.update({ where: { id }, data, ...query });
  }

  delete(@ParamId() id: number, @Query(UserProjection) query: UserDefaultArgs) {
    return this.repo.delete({ where: { id }, ...query });
  }
}
