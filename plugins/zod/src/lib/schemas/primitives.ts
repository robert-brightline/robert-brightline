import type { Any } from '@robert-brightline/types';
import type { ZodType } from 'zod';
import { z } from 'zod';

export const str = () => z.string();

export const jwt = () => z.jwt();
export const url = () => z.url();

export const uuid = () => z.uuid();
export const uuid4 = () => z.uuidv4();
export const uuid6 = () => z.uuidv6();
export const uuid7 = () => z.uuidv7();
export const ulid = () => z.ulid();

export const name = () => str().max(255);
export const desc = () => str().max(1000);
export const email = () => z.email();
export const upc = () => z.string().min(8).max(13);
export const slug = () => z.string().regex(/^[a-z-]+$/);

export const pin6 = () => z.string().regex(/^[0-9]{6}$/);
export const pin4 = () => z.string().regex(/^[0-9]{4}$/);

export const num = () => z.coerce.number();
export const int = () => num().int();

export const uint = () => int().min(0);
export const unum = () => num().min(0);

export const bool = () => z.coerce.boolean();

export const datetime = () => z.iso.datetime();
export const date = () => z.iso.date();

export const password = () => {
  return z
    .string()
    .regex(/[A-Z]{1,}/, { error: 'Must contain an uppercase letter' })
    .regex(/[a-z]{1,}/, { error: 'Must contain a lowercase letter' })
    .regex(/[0-9]{1,}/, { error: 'Must contain a number' })
    .regex(/[!@#$%^&*()_+{}:"<>?\\[\\];',\.\/]{1,}/, {
      error: 'Must contain a special character',
    });
};

export const future = () =>
  z.iso.date().refine(
    (value) => {
      return new Date(value) > new Date();
    },
    { error: 'Must be a future date' },
  );

export const past = () =>
  z.iso.date().refine(
    (value) => {
      return new Date(value) > new Date();
    },
    { error: 'Must be a past date' },
  );

export const md5 = () => z.hash('md5');
export const sha1 = () => z.hash('sha1');
export const sha256 = () => z.hash('sha256');
export const sha384 = () => z.hash('sha384');
export const sha512 = () => z.hash('sha512');

export const dir = () => z.enum(['asc', 'desc']);

export const binary = () => int().min(0).max(1);
export const percent = () => num().min(0).max(100);

export const nrange = (min: number, max: number) => num().min(min).max(max);
export const irange = (min: number, max: number) => int().min(min).max(max);

export const orderByCount = () => z.object({ _count: dir() });

export const connect = () => z.object({ connect: z.object({ id: int() }) });

export const connectMany = () =>
  z.object({ connect: z.object({ id: int() }).array() });

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

type __Literal = z.infer<typeof literalSchema>;
type __Json = __Literal | { [key: string]: __Json } | __Json[];
export const json: () => z.ZodType<__Json> = () =>
  z.union([literalSchema, z.array(json()), z.record(str(), str())]);

export const prejson = (schema: ZodType<Any>) =>
  z.preprocess((value: string) => {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }, schema);
