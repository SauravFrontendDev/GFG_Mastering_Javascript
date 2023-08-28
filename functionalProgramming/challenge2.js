/**
 * Anagram
 */

const checkAnagram = (str1, str2) => {
  let result = true;
  for (let i = 0; i < str1; i++) {
    if (!str2.includes(str1[i])) {
      result = true;
    }
  }

  if (str1.length === str2.length && result) return true;
  else return false;
};

console.log(checkAnagram("star", "ters"));
