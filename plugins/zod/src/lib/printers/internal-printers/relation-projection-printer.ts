import { External } from '../../common/imports-as.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';

export class RelationProjectionPrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.RelationProjection;
  }

  protected override schema(): string {
    return `z.union([ 
         ${External}.bool(),
         z.object({ 
            select: ${this.model.name}${nameSuffixes.OwnProjection}.optional(), 
            where: ${this.model.name}${nameSuffixes.OwnWhere}.optional()
         })
      ])`;
  }
}
