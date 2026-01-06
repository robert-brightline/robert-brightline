import { External } from '../../common/imports.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';

export class RelationCreateManyPrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.RelationManyCreate;
  }

  protected override schema(): string {
    return `z.union([ 
         ${External}.connectMany(),
         z.object({ 
            createMany: z.object({ 
                data: ${this.model.name}${nameSuffixes.OwnCreate}.array()
            }) 
         })
      ])`;
  }
}
