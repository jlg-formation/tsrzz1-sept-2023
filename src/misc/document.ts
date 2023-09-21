export const querySelector = (selector: string): Element => {
  const result = document.querySelector(selector);
  if (result === null) {
    throw new Error(`Cannot find selector ${selector}`);
  }
  return result;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};
