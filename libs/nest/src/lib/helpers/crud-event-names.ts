import { prefixer } from '@robert-brightline/utils';

export type CrudEventNames = {
  read: string;
  create: string;
  update: string;
  delete: string;
  beforeCreate: string;
  beforeRead: string;
  beforeDelete: string;
  beforeUpdate: string;
};

export function crudEventNames(kebabCaseResourceName: string): CrudEventNames {
  const px = prefixer(`${kebabCaseResourceName}.`);

  return {
    create: px(`create`),
    read: px(`read`),
    delete: px(`delete`),
    update: px(`update`),
    beforeCreate: px(`create.before`),
    beforeRead: px(`read.before`),
    beforeDelete: px(`delete.before`),
    beforeUpdate: px(`update.before`),
  };
}
