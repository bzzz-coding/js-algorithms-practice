/*
Given a string of characters as input, write a function that returns it with the characters reversed.
*/

// function reverseStr(str) {
//   return str.split('').reverse().join('')
// }

// 'abcde' => 2.5 => 2 
// 'abcdef' => 3
function reverseStr(str) {
  let result = ''
  for (const char of str) {
    result = char + result
  }
  return result
}


console.log(reverseStr('hello world!'))
console.log(reverseStr('hello world'))