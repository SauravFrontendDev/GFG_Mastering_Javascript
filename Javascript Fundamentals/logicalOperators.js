/**
 * Logical Operator with Conditional Statements
 * 1. OR || ⚡- at least one condition should be true
 * 2. AND && 🔥- all conditions must be true
 * 3. NOT ! ⛄ - reverses the condition
 * 4. NULLISH COALESCING ?? 🌈
 */

const physics = 90;
const math = 82;
const chemistry = 86;
const biology = 96;

// if (physics > 85 && chemistry > 85 && math > 85) {
//   console.log("You are eligible for IIT.");
// } else {
//   console.log("You are not eligible for IIT.");
// }
if (physics > 90 || math > 85 || chemistry > 85) {
  console.log("You are eligible for Engineering.");
} else {
  console.log("You are not eligiblefor Engineering");
}
