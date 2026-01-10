export function prefixer(prefix: string) {
  return (value: string) => `${prefix}${value}`;
}

export function suffixer(suffix: string) {
  return (value: string) => `${value}${suffix}`;
}
