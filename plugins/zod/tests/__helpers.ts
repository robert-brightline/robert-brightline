export function trim(text: string) {
  return text.replace(/[\s\n\t]{1,}/g, ' ').trim();
}
