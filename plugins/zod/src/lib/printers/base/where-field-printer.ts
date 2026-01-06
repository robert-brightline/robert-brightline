import { Enums, External, Internal } from '../../common/imports-as.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import type { ScalarType } from '../../common/scalar-type.js';
import { InputFieldPrinter } from './input-field-printer.js';

export class WhereFieldPrinter extends InputFieldPrinter {
  protected override oneRelationField(): string {
    return this.join(
      Internal,
      `${this.field.type}${nameSuffixes.OwnWhere}`,
      this.optional(),
    );
  }

  protected override manyRelationField(): string {
    return this.join(
      Internal,
      `${this.field.type}${nameSuffixes.RelationManyWhere}`,
      this.optional(),
    );
  }

  protected override optional(): string {
    return 'optional()';
  }

  protected override scalarField(): string {
    const parts: string[] = [];

    switch (this.field.type as ScalarType) {
      case 'String': {
        if (this.isList()) {
          parts.push(`ArrayStringFilter`);
        } else {
          parts.push(`StringFilter`);
        }

        break;
      }
      case 'Integer':
      case 'Int': {
        if (this.isList()) {
          parts.push(`ArrayIntegerFilter`);
        } else {
          parts.push(`IntegerFilter`);
        }

        break;
      }
      case 'Float':
      case 'Decimal':
      case 'Number': {
        if (this.isList()) {
          parts.push(`ArrayNumberFilter`);
        } else {
          parts.push(`NumberFilter`);
        }

        break;
      }
      case 'Boolean': {
        if (this.isList()) {
          parts.push(`ArrayBooleanFilter`);
        } else {
          parts.push(`BooleanFilter`);
        }

        break;
      }
      case 'Json': {
        if (this.isList()) {
          parts.push(`ArrayJsonFilter`);
        } else {
          parts.push(`JsonFilter`);
        }

        break;
      }
      case 'Datetime':
      case 'DateTime': {
        if (this.isList()) {
          parts.push(`ArrayDateTimeFilter`);
        } else {
          parts.push(`DateTimeFilter`);
        }

        break;
      }
      case 'Date': {
        if (this.isList()) {
          parts.push(`ArrayDateFilter`);
        } else {
          parts.push(`DateFilter`);
        }

        break;
      }
    }

    return this.join(External, this.join(...parts), this.optional());
  }

  protected override enumField(): string {
    if (this.field.isList) {
      return this.join(
        Enums,
        `${this.field.type}${nameSuffixes.EnumArrayFilter}`,
        this.optional(),
      );
    } else {
      return this.join(
        Enums,
        `${this.field.type}${nameSuffixes.EnumFilter}`,
        this.optional(),
      );
    }
  }
}
