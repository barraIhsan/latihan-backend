export function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw TypeError("Please put in a number");
  }
  return a + b;
}
