/*
Given a string of words or phrases, count the number of vowels.
*/

// function countVowels(str) {
//   let result = 0
//   const vowels = {}
//   for (const v of 'aeiou') {
//     vowels[v] = true
//   }
//   for (const char of str.toLowerCase()) {
//     if (vowels[char]) {
//       result++
//     }
//   }
//   return result
// }

function countVowels(str) {
  let vowels = str.match(/[aeiou]/ig)
  return vowels ? vowels.length : 0
}

console.log(countVowels('hello world'))
console.log(countVowels('hEllO world'))