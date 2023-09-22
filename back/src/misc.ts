export const random = (min: number, max: number, decimal = 0): number => {
  if (min > max) {
    throw new Error("min > max");
  }
  const pow = Math.pow(10, decimal);
  const x = Math.random() * (max - min) + min;
  return Math.round(x * pow) / pow;
};
