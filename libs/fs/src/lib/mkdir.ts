import { mkdir as __mkdir } from 'fs/promises';

export async function mkdir(filepath: string) {
  await __mkdir(filepath, { recursive: true });
}
