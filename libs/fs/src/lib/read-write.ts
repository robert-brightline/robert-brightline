import { appendFile, readFile, writeFile } from 'fs/promises';
import { dump, load } from 'js-yaml';
import { join } from 'path';
import { mkdir } from './mkdir.js';

export function readTextFile(filepath: string, controller?: AbortController) {
  return readFile(filepath, { encoding: 'utf-8', signal: controller?.signal });
}

export async function writeTextFile(
  filepath: string,
  content = '',
  controller?: AbortController,
) {
  await mkdir(join(filepath, '..'));
  return await writeFile(filepath, content, {
    encoding: 'utf-8',
    signal: controller?.signal,
  });
}

export async function readJsonFile<T>(
  filepath: string,
  controller?: AbortController,
) {
  const content = await readTextFile(filepath, controller);
  return JSON.parse(content) as T;
}

export async function writeJsonFile<T>(
  filepath: string,
  content: T,
  controller?: AbortController,
) {
  const text = JSON.stringify(content);
  await writeTextFile(filepath, text, controller);
}

export async function readYamlFile<T>(
  filepath: string,
  controller?: AbortController,
) {
  const content = await readTextFile(filepath, controller);
  return load(content) as T;
}

export async function writeYamlFile<T>(
  filepath: string,
  content: T,
  controller?: AbortController,
) {
  const text = dump(content);
  await writeTextFile(filepath, text, controller);
}

export async function updateJsonFile<T>(
  filepath: string,
  updateFn: (value: T) => T,
  controller?: AbortController,
) {
  const content = await readJsonFile<T>(filepath, controller);
  const updatedContent = await updateFn(content);

  await writeJsonFile<T>(filepath, updatedContent);
}

export async function updateYamlFile<T>(
  filepath: string,
  updateFn: (value: T) => T,
  controller?: AbortController,
) {
  const content = await readYamlFile<T>(filepath, controller);
  const updatedContent = await updateFn(content);

  await writeYamlFile<T>(filepath, updatedContent);
}

export async function appendTextFile(filepath: string, content: string) {
  await appendFile(filepath, content, { encoding: 'utf-8' });
}

export async function preappendTextFile(
  filepath: string,
  content: string,
  controller?: AbortController,
) {
  const currentContent = await readTextFile(filepath);
  await writeTextFile(filepath, `${content}${currentContent}`, controller);
}
