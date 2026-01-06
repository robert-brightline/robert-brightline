import type { DMMF } from '@prisma/generator-helper';
import { UnsupportedError } from '@robert-brightline/errors';
import { Enums, External, Internal } from '../../common/imports.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import type { Printable } from '../../common/printable.js';
import type { ScalarType } from '../../common/scalar-type.js';
import { isRelationField } from '../helpers/field-checkers.js';

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
    return parts.filter((e) => e && e.trim()).join('.');
  }

  protected optional() {
    const parts: string[] = [];

    if (
      this.field.isRequired !== true ||
      this.field.hasDefaultValue ||
      (isRelationField(this.field) && this.field.isList)
    ) {
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

    return this.join(parts.join(''));
  }

  protected manyRelationField() {
    return this.join(
      Internal,
      `${this.field.type}${nameSuffixes.RelationManyCreate}`,
      this.optional(),
    );
  }

  protected oneRelationField() {
    return this.join(
      Internal,
      `${this.field.type}${nameSuffixes.RelationCreate}`,
      this.optional(),
    );
  }

  protected scalarField() {
    const parts: string[] = [];

    switch (this.field.type as ScalarType) {
      case 'String': {
        switch (this.field.name) {
          case 'description': {
            parts.push('desc()');
            break;
          }
          case 'name': {
            parts.push('name()');
            break;
          }
          case 'username':
          case 'email': {
            parts.push('email()');
            break;
          }
          case 'uuid': {
            parts.push('uuid7()');
            break;
          }
          case 'password': {
            parts.push('password()');
            break;
          }
          case 'sku': {
            parts.push('sku()');
            break;
          }
          case 'barcode':
          case 'upc': {
            parts.push('upc()');
            break;
          }
          case 'slug': {
            parts.push('slug()');
            break;
          }
          case 'url': {
            parts.push('url()');
            break;
          }
          default: {
            parts.push('str()');
            break;
          }
        }
        break;
      }

      case 'Int':
      case 'Integer': {
        switch (this.field.name) {
          case 'rate': {
            parts.push('rate()');
            break;
          }
          case 'quantity': {
            parts.push('uint()');
            break;
          }
          default: {
            parts.push('int()');
            break;
          }
        }
        break;
      }
      case 'Float':
      case 'Decimal':
      case 'Number': {
        switch (this.field.name) {
          case 'tax':
          case 'price':
          case 'cost': {
            parts.push('unum()');
            break;
          }
          default: {
            parts.push('num()');
            break;
          }
        }
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
        if (this.field.documentation?.includes('@future')) {
          parts.push(`future()`);
        } else if (this.field.documentation?.includes('@past')) {
          parts.push(`past()`);
        } else {
          parts.push(`datetime()`);
        }
        break;
      }
      case 'Date': {
        if (this.field.documentation?.includes('future')) {
          parts.push(`future()`);
        } else if (this.field.documentation?.includes('past')) {
          parts.push(`past()`);
        } else {
          parts.push(`date()`);
        }
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

    parts.push(`${this.field.type}${nameSuffixes.Enum}`);

    if (this.field.isList === true) {
      parts.push('array()');
    }

    return this.join(Enums, this.join(...parts), this.optional());
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
