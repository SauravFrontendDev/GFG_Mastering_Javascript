/**
 * Read data from User
 *
 */

const userData = require("readline-sync");

const userName = userData.question("What is your Name?");
const userAge = userData.question("May i know your Age?");
const yearOfBirth = 2023 + Number(userAge);

console.log(
  `Welcome ${userName} to GFG. Thank you for letting us know your age...
  You were born on ${yearOfBirth}`
);

// // // /*
// // //  * First Program  - Show Hello Geeks on consle
// // //  * Understand what is console
// // //  */

// // Type Conversion

// const a = 3;
// const b = 17;

// console.log(a + b);
// console.log(String(a) + String(b));

// // ReadlineSync

// // // console.log("Hello Geeks!!");
// // // console.log("My name is Saurav verma.");

// // // console.log(7 + 36);

// // // // Variables

// // // var message = "Hello, GeeksforGeeks!!";
// // // console.log(message);
// // // console.log(message);
// // // console.log(message);
// // // console.log(message);
// // // message = "My Name is Saurav";
// // // console.log(message);

// // // let textMessage = "Javascript is the best in the world!";

// // // console.log(textMessage);

// // // const number = 45;
// // // console.log(number);
// // // number = 48;
// // // console.log(number);

// // // const message = "Hello";
// // // console.log(message);

// // // message = "hi";
// // // console.log(message);
// // // console.log(message);

// // // var message = "Good Morning";

// // // console.log(message);

// // // let shabd = "Vanakkam";

// // // console.log(shabd);

// // // shabd = "Aalios";
// // // console.log(shabd);

// // const myFirstName = "Saurav";
// // const myLastName = "Verma";
// // const myAge = 25;
// // const currentLanguage = "JavaScript";

// // const message = `Hello everyone, My name is ${myFirstName} ${myLastName} and I am ${myAge} years old. I want to become a Web Developer and currently I am learning ${currentLanguage}, The Language of Modern Web.`;
// // console.log(message);

// // // Arithmetic Operations

// // const x = "pine";
// // const y = "apple";

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);

// // // console.log(x + y);
// // // console.log(x - y);
// // // console.log(x * y);
// // // console.log(x / y);
// // // console.log(x % y);

// // // console.log(7 ** 2);
