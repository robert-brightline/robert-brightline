import type { Any } from '@robert-brightline/types';

export interface CrudController {
  create(data: Any, projection: Any): Any;
  read(query: Any): Any;
  readOneById(id: number, projection: Any): Any;
  update(id: number, data: Any, projection: Any): Any;
  delete(id: number, projection: Any): Any;
}
