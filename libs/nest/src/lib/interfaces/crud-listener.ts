import type { Any } from '@robert-brightline/types';

export interface CrudListener {
  onRead?(payload: Any): void | Promise<void>;
  onCreate?(payload: Any): void | Promise<void>;
  onUpdate?(payload: Any): void | Promise<void>;
  onDelete?(payload: Any): void | Promise<void>;

  beforeRead?(payload: Any): void | Promise<void>;
  beforeCreate?(payload: Any): void | Promise<void>;
  beforeUpdate?(payload: Any): void | Promise<void>;
  beforeDelete?(payload: Any): void | Promise<void>;
}

export type CrudListenerMethod = keyof Required<CrudListener>;
