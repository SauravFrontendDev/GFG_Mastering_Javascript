function backDoorResponse(line) {
  // return line[line.length - 1];
  line = line.trim();
  console.log(line[line.length - 1]);
}

console.log(backDoorResponse("Stands so high   "));
console.log(backDoorResponse("\tHuge hooves too\t"));
console.log(backDoorResponse("Impatiently waits for \t \t"));
console.log(backDoorResponse("    Reins and harness    "));
console.log(backDoorResponse("Eager to leave\n\n"));
