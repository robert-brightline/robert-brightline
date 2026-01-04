/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotImplementedError } from '@robert-brightline/errors';
import type { Printable } from '../common/printable.js';

export class SchemaPrinter<T extends { name: string }> implements Printable {
  constructor(protected readonly model: T) {}

  /**
   * Create the shape of the schema such as enum [] or  object {}
   *
   * @returns string
   */
  protected shape(): string {
    throw new NotImplementedError();
  }

  /**
   * Create the schema such as z.object(${shape}) or z.enum(${shape})
   *
   * @param shape shape value
   * @returns string
   */
  protected schema(shape: string): string {
    throw new NotImplementedError();
  }

  /**
   * Create the schema name
   *
   * @param suffix name suffix such as Create, Update, Where, Query
   * @returns string
   */
  protected schemaName(suffix: string) {
    return `${this.model.name}${suffix}`;
  }

  /**
   * Print the schema name suffix
   *
   * @returns string
   */
  protected schemaNameSuffix() {
    return '';
  }

  /**
   * Create schema name decleration such as 'export const schemaName'
   *
   * @param name schemae Name
   * @returns
   */
  protected declare(name: string) {
    return `export const ${name}`;
  }

  /**
   * Print the schema such as decleration = schema
   * @returns
   */
  print(): string {
    return `${this.declare(this.schemaName(this.schemaNameSuffix()))} = ${this.schema(this.shape())}`;
  }
}
