import { normalizeName } from './normalize-name.js';

export type Names = {
  camel: string;
  pascal: string;
  snake: string;
  kebab: string;
  constant: string;
  title: string;
};

export function names(name: string): Names {
  const n = normalizeName(name);
  return {
    camel: n.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
    pascal: n
      .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/^[a-z]/, (letter) => letter.toUpperCase()),
    snake: n.replace(/-/g, '_'),
    kebab: n,
    constant: n.replace(/-/g, '_').toUpperCase(),
    title: n
      .replace(/-([a-z])/g, (_, letter) => ' ' + letter.toUpperCase())
      .replace(/^[a-z]/, (letter) => letter.toUpperCase()),
  };
}
