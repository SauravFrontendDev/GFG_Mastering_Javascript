const calculateSum = (chota, bda) => {
  let sum = 0;
  for (let i = chota; i <= bda; i++) {
    sum += i;
  }
  return sum;
};

console.log(calculateSum(20, 100));
