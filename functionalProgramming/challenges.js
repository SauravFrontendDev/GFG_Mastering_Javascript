/**
 * Factorial
 */

const factorial = (num) => {
  if (num < 1) return -1;
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};
console.log(factorial(-3));
