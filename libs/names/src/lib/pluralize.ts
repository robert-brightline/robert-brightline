export function pluralize(name: string): string {
  const irregulars: Record<string, string> = {
    child: 'children',
    person: 'people',
    man: 'men',
    woman: 'women',
    tooth: 'teeth',
    foot: 'feet',
    mouse: 'mice',
    goose: 'geese',
    ox: 'oxen',
    cactus: 'cacti',
    focus: 'foci',
    fungus: 'fungi',
    nucleus: 'nuclei',
    syllabus: 'syllabi',
    analysis: 'analyses',
    diagnosis: 'diagnoses',
    oasis: 'oases',
    thesis: 'theses',
    crisis: 'crises',
    phenomenon: 'phenomena',
    criterion: 'criteria',
    datum: 'data',
  };

  if (irregulars[name.toLowerCase()]) {
    return irregulars[name.toLowerCase()];
  }

  if (
    name.endsWith('o') &&
    !name.endsWith('ao') &&
    !name.endsWith('eo') &&
    !name.endsWith('io') &&
    !name.endsWith('oo') &&
    !name.endsWith('uo')
  ) {
    return name + 'es';
  }

  if (
    name.endsWith('y') &&
    !name.endsWith('ay') &&
    !name.endsWith('ey') &&
    !name.endsWith('iy') &&
    !name.endsWith('oy') &&
    !name.endsWith('uy')
  ) {
    return name.slice(0, -1) + 'ies';
  } else if (
    name.endsWith('s') ||
    name.endsWith('x') ||
    name.endsWith('z') ||
    name.endsWith('ch') ||
    name.endsWith('sh')
  ) {
    return name + 'es';
  } else {
    return name + 's';
  }
}
