import type { Prisma } from '@robert-brightline/auth-db/client';
import type {
  UserCreateInput,
  UserDefaultArgs,
  UserFindManyArgs,
  UserUpdateInput,
} from '@robert-brightline/auth-db/models';
import {
  UserCreate,
  UserOnlyProjection,
  UserQuery,
  UserUpdate,
} from '@robert-brightline/auth-db/zod';
import { hash } from '@robert-brightline/crypto';
import type { CrudController } from '@robert-brightline/nest';
import { Body, ParamId, Query, Rest } from '@robert-brightline/nest';
import { InjectRepo } from '@robert-brightline/nest-prisma';

@Rest()
export class UserController implements CrudController {
  constructor(@InjectRepo() protected readonly repo: Prisma.UserDelegate) {}

  async create(
    @Body(UserCreate) data: UserCreateInput,
    @Query(UserOnlyProjection) { select }: UserDefaultArgs,
  ) {
    const hashedPassword = await hash(data.password);
    data.password = hashedPassword;
    return await this.repo.create({ data, select });
  }

  read(@Query(UserQuery) query: UserFindManyArgs) {
    return this.repo.findMany(query);
  }

  readOneById(
    @ParamId() id: number,
    @Query(UserOnlyProjection) { select }: UserDefaultArgs,
  ) {
    return this.repo.findUniqueOrThrow({ where: { id }, select });
  }

  update(
    @ParamId() id: number,
    @Body(UserUpdate) data: UserUpdateInput,
    @Query(UserOnlyProjection) { select }: UserDefaultArgs,
  ) {
    return this.repo.update({ where: { id }, data, select });
  }

  delete(
    @ParamId() id: number,
    @Query(UserOnlyProjection) { select }: UserDefaultArgs,
  ) {
    return this.repo.delete({ where: { id }, select });
  }
}
