import type { DMMF } from '@prisma/generator-helper';
import {
  importEnums,
  importExternal,
  importInternal,
  importZod,
} from '../common/imports.js';
import type { Printable } from '../common/printable.js';
import type { InputPrinter } from './base/input-printer.js';

export class MainSchemaPrinter implements Printable {
  constructor(
    protected readonly model: DMMF.Model,
    protected readonly schemaPrinter: typeof InputPrinter,
  ) {}

  print() {
    const importList: string[] = [];
    const schemaCode = new this.schemaPrinter(this.model).print();

    importList.push(importZod(schemaCode));
    importList.push(importInternal(schemaCode));
    importList.push(importExternal(schemaCode));
    importList.push(importEnums(schemaCode, '../'));

    const importCode = importList.filter((e) => e && e.trim()).join('\n');

    return [importCode, schemaCode].filter((e) => e && e.trim()).join('\n');
  }
}
