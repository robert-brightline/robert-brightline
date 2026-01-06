import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';
import { OrderFieldPrinter } from '../base/order-field-printer.js';
import { isOwnQueryField } from '../helpers/field-checkers.js';

export class OwnOrderPrinter extends InputPrinter {
  constructor(model: DMMF.Model) {
    super(model, OrderFieldPrinter);
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.OwnOrder;
  }

  protected override filterField(field: DMMF.Field): boolean {
    return isOwnQueryField(field);
  }
}
