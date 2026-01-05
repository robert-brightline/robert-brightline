import type { DMMF } from '@prisma/generator-helper';
import { UnsupportedError } from '@robert-brightline/errors';
import { External, Internal } from '../../common/imports-as.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import type { Printable } from '../../common/printable.js';
import type { ScalarType } from '../../common/scalar-type.js';

/**
 * By default it print the create input fields.
 * Extend this class and override field printers by kind.
 */
export class InputFieldPrinter implements Printable {
  constructor(protected readonly field: DMMF.Field) {}

  protected isList() {
    return this.field.isList;
  }
  protected join(...parts: string[]) {
    return parts.filter((e) => e.trim()).join('.');
  }

  protected optional() {
    const parts: string[] = [];

    if (this.field.isRequired !== true) {
      parts.push('optional()');
    }

    return parts.join('.');
  }

  private relationField() {
    const parts: string[] = [];
    if (this.field.isList) {
      parts.push(this.manyRelationField());
    } else {
      parts.push(this.oneRelationField());
    }

    return this.join(parts.join(''), this.optional());
  }

  protected manyRelationField() {
    return this.join(
      Internal,
      `${this.field.name}${nameSuffixes.RelationManyCreate}`,
    );
  }

  protected oneRelationField() {
    return this.join(
      Internal,
      `${this.field.name}${nameSuffixes.RelationCreate}`,
    );
  }

  protected scalarField() {
    const parts: string[] = [];

    switch (this.field.type as ScalarType) {
      case 'String': {
        parts.push(`str()`);
        break;
      }

      case 'Int':
      case 'Integer': {
        return parts.push('int()');
      }
      case 'Float':
      case 'Decimal':
      case 'Number': {
        parts.push('num()');
        break;
      }
      case 'Boolean': {
        parts.push(`bool()`);
        break;
      }
      case 'Json': {
        parts.push('json()');
        break;
      }
      case 'Datetime':
      case 'DateTime': {
        parts.push(`datetime()`);
        break;
      }
      case 'Date': {
        parts.push(`date()`);
        break;
      }
    }

    if (this.field.isList === true) {
      parts.push('array()');
    }

    return this.join(External, this.join(...parts), this.optional());
  }

  protected enumField() {
    const parts: string[] = [];

    parts.push(`${this.field.name}${nameSuffixes.Enum}`);

    if (this.field.isList === true) {
      parts.push('array()');
    }

    return this.join(Internal, this.join(...parts), this.optional());
  }

  schema() {
    switch (this.field.kind) {
      case 'object': {
        return this.relationField();
      }
      case 'scalar': {
        return this.scalarField();
      }
      case 'enum': {
        return this.enumField();
      }
      case 'unsupported': {
        throw new UnsupportedError();
      }
    }
  }

  print(): string {
    return `${this.field.name}: ${this.schema()}`;
  }
}
