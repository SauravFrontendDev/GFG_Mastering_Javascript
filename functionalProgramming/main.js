greet("Satya", "mumbai");
greet("Narayan", "sirsa");
greet("Murti", "panipat");

// Function Declaration / Function Statement

function greet(userName, city = "mathura") {
  console.log(`Hello ${userName}, Welcome to GeeksforGeeks`);
  console.log(`Thank you for joining us from ${city}`);
}

// Calling a function

greet("Anand");
greet("Ranganathan");

// Excercise

function calculateSum(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
calculateSum(1, 10);

const calculateNewSum = (min, max) => {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
};
calculateNewSum(1, 10);

const sumGreater = (x, y) => (x > y ? x + y : x - y);
console.log(sumGreater(23, 21));
console.log(sumGreater(21, 27));
