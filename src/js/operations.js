// List of operators
const plus = (x, y) => x + y;
const minus = (x, y) => x - y;

const operations = { plus, minus };

export const operate = (operator, x, y) => {
  // If no operator, keep number and continue
  return operator ? operations[operator](x, y) : y;
};
