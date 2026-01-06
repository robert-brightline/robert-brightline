import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { isQueryField } from './helpers/field-checkers.js';
import { OwnOrderPrinter } from './internal-printers/own-order-printer.js';

export class OrderPrinter extends OwnOrderPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Order;
  }

  override filterField(field: DMMF.Field): boolean {
    return isQueryField(field);
  }
}
