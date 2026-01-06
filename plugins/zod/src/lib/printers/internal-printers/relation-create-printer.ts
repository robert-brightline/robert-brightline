import { External } from '../../common/imports.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';

export class RelationCreatePrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.RelationCreate;
  }

  protected override schema(): string {
    return `z.union([ 
         ${External}.connect(),
         z.object({ 
          create: ${this.model.name}${nameSuffixes.OwnCreate} 
         })
      ])`;
  }
}
