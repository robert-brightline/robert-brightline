import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';

export class RelationWhereManyPrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.RelationManyWhere;
  }

  protected override schema(): string {
    return `z.union([
        z.object({ some: ${this.model.name}${nameSuffixes.OwnWhere} }), 
        z.object({ every: ${this.model.name}${nameSuffixes.OwnWhere} }), 
        z.object({ none: ${this.model.name}${nameSuffixes.OwnWhere} })
      ])`;
  }
}
