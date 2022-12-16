/*
Given a string of characters, return the character that appears the most often.
*/

function maxChar(str) {
  let cache = {};
  for (const char of str) {
    cache[char] ? cache[char]++ : cache[char] = 1;
  }
  let chars = Object.keys(cache);
  let max = 0;
  let result;
  for (const char of chars) {
    if (cache[char] > max) {
      max = cache[char];
      result = char
    }
  }
  return result
}

console.log(maxChar('di9weht922jdjdjddkdkdkd'))