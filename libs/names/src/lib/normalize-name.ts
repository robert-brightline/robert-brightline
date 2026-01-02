export function normalizeName(anyCase: string): string {
  return anyCase
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_.-]{1,}/g, '-')
    .toLowerCase();
}
