/**
 * While Loop
 * Do While Loop
 */

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Try Catch
// const userName = "Saurav";

// try {
//   someFunction();
//   console.log(myName);
// } catch (error) {
//   console.log("Error Occured");
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// } finally {
//   console.log("Finally Executed");
// }
// console.log(userName);

let readlineSync = require("readline-sync");

let num = 578;

while (num >= 50) {
  num = readlineSync.question(
    "Reallly!!!, Enter a Number less than 50, you moron."
  );
}

console.log("Number Accepted");
