import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { InputPrinter } from './base/input-printer.js';
import { isInputField } from './helpers/field-checkers.js';

export class CreatePrinter extends InputPrinter {

  constructor(model:DMMF.Model){
    super(model,  )
  }
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Create;
  }

  override filterField(field: DMMF.Field): boolean {
    return isInputField(field);
  }
}
