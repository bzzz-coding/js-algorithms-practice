// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.


function checkWords(str, longStr) {
  const longObj = longStr.split(' ').reduce((obj, word) => {
    if (!obj[word]) {
      obj[word] = true;
    }
    return obj
  }, {})
  for (const word of str.split(' ')) {
    if (!longObj[word]) {
      return false
    }
  }
  return true
}

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
console.log(checkWords("sit ad est sint", magazine))
console.log(checkWords("sit ad est love", magazine))