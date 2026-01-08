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

export function crudEventNames(resouceName: string): CrudEventNames {
  return {
    create: `${resouceName}.create`,
    read: `${resouceName}.read`,
    delete: `${resouceName}.delete`,
    update: `${resouceName}.update`,
    beforeCreate: `${resouceName}.create.before`,
    beforeRead: `${resouceName}.read.before`,
    beforeDelete: `${resouceName}.delete.before`,
    beforeUpdate: `${resouceName}.update.before`,
  };
}
