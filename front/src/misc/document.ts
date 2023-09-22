export const querySelector = <T extends Element>(
  selector: string,
  type?: new () => T
): T => {
  // note: new () => T signifie classe de T

  const result = document.querySelector(selector);
  if (result === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  if (type !== undefined && !(result instanceof type)) {
    throw new Error(`Selector ${selector} not instance of ${type.name}`);
  }
  return result as T;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const keys = <T extends object>(o: T): (keyof T)[] => {
  return Object.keys(o) as (keyof T)[];
};
