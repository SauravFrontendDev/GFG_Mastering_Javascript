const findPattern = (s, p) => {
  // code here
  if (p.length > s.length) return -1;

  for (let i = 0; i <= s.length - p.length; i++) {
    if (s.substr(i) === p) return i;
    else continue;
  }
  return -1;
};
console.log(findPattern("Hello", "llo"));
console.log(findPattern("Program", "ram"));
console.log(findPattern("Buddhu", "utopia"));
