/*
A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
Ignore non-alphabetic characters, not case sensitive.
*/

function checkPalindrome(str) {
  let matched = str.toLowerCase().match(/[a-z]/g).join('')
  return matched === matched.split('').reverse().join('')
}

function checkPalindrome(str) {
  let cleaned = str.replace(/[^a-zA-Z]/g, '').toLowerCase()
  console.log(cleaned)
  return cleaned === cleaned.split('').reverse().join('')
}

console.log(checkPalindrome('rac3ecar!'))
console.log(checkPalindrome('racecar'))