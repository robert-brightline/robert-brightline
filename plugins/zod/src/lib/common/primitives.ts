import z from 'zod';

export const str = () => z.string();
export const uuid = () => z.uuid();
export const uuid4 = () => z.uuidv4();
export const uuid6 = () => z.uuidv6();
export const uuid7 = () => z.uuidv7();
export const ulid = () => z.ulid();
export const jwt = () => z.jwt();
export const url = () => z.url();

export const name = () => str().max(255);
export const desc = () => str();
export const email = () => z.email();
export const upc = () => z.string().min(8).max(13);
export const slug = () => z.string().regex(/^[a-z-]+$/);

export const pin6 = () => z.string().regex(/^[0-9]{6}$/);
export const pin4 = () => z.string().regex(/^[0-9]{4}$/);

export const num = () => z.coerce.number();
export const int = () => num().int();

export const uint = () => int().min(0);
export const unum = () => num().min(0);

export const datetime = () => z.iso.datetime();
export const date = () => z.iso.date();

export const future = () =>
  z.iso.date().refine(
    (value) => {
      return new Date(value) > new Date();
    },
    { error: 'The value is not a future date' },
  );

export const past = () =>
  z.iso.date().refine(
    (value) => {
      return new Date(value) > new Date();
    },
    { error: 'The value is not a past date' },
  );

export const md5 = () => z.hash('md5');
export const sha1 = () => z.hash('sha1');
export const sha256 = () => z.hash('sha256');
export const sha384 = () => z.hash('sha384');
export const sha512 = () => z.hash('sha512');

export const dir = () => z.enum(['ASC', 'DESC']);

export const binary = () => int().min(0).max(1);

export const nrange = (min: number, max: number) => num().min(min).max(max);
export const irange = (min: number, max: number) => int().min(min).max(max);
