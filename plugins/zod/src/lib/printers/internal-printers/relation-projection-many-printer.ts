import { External } from '../../common/imports.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';

export class RelationProjectionManyPrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.RelationManyProjection;
  }

  protected override schema(): string {
    return `z.union([ 
         ${External}.bool(),
         z.object({ 
            select: ${this.model.name}${nameSuffixes.OwnProjection}.optional(), 
            where: ${this.model.name}${nameSuffixes.OwnWhere}.optional(), 
            orderBy: ${this.model.name}${nameSuffixes.OwnOrder}.optional(),
            take: ${External}.int().min(0).optional(),
            skip: ${External}.int().min(0).optional()
         })
      ])`;
  }
}
