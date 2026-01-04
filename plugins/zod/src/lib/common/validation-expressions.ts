export const valiationWithValue = {
  min: /@min\((\d+)\)/,
  max: /@max\((\d+)\)/,
  moreThan: /@moreThan\((\w+)\)/,
  lessThan: /@moreThan\((\w+)\)/,
  notWith: /@notWith\((\w+)\)/,
};

export const validationsWithNoValue = {
  future: /@future/,
  past: /@past/,
  pin: /@pin/,
  password: /@password/,
  email: /@email/,
  url: /@url/,
  phone: /@phone/,
  uuid: /@uuid/,
  uuid4: /@uuid4/,
  uuid6: /@uuid6/,
  uuid7: /@uuid7/,

  odd: /@odd/,
  even: /@even/,

  required: /@required/,
  readonly: /@readonly/,
  internal: /@internal/,
};
