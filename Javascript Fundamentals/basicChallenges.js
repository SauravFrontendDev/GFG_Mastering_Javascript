/*
A program that reads 3 strings and print the smallest
*/

const a = "app";
const b = "pear";
const c = "watermelon";

if (a.length < b.length) {
  if (a.length < c.length) {
    console.log("Smallest is a");
  } else {
    console.log("Smallest is c");
  }
} else {
  if (b.length < c.length) {
    console.log("Smallest is b");
  } else {
    console.log("Smallest is c");
  }
}
