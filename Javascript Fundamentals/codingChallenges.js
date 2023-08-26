const firsDigit = (num) => {
  const len = String(num).length;
  for (let i = 0; i < len - 1; i++) {
    num = Math.floor(num / 10);
  }
  return Number(num);
};

console.log(firsDigit(2356));
console.log(firsDigit(916));
console.log(firsDigit(123));
console.log(firsDigit(20));
console.log(firsDigit(1));
