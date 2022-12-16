/*
Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.
*/

// function checkAnagrams(str1, str2) {
//   return str1.split('').sort().join('') ===  str2.split('').sort().join('')
// }

function checkAnagrams(str1, str2) {
  let obj1 = str1.split('').reduce((obj, letter) => {
    obj[letter] ? obj[letter]++ : obj[letter] = 1
    return obj
  }, {})
  let obj2 = str2.split('').reduce((obj, letter) => {
    obj[letter] ? obj[letter]++ : obj[letter] = 1
    return obj
  }, {})
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (const letter of Object.keys(obj1)) {
    if (obj1[letter] !== obj2[letter]) {
      return false
    }
  }
  return true
}


console.log(checkAnagrams("hello world", "world hello"))
console.log(checkAnagrams("hellw world", "world hello"))