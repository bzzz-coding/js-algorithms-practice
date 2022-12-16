/*
Given an integer, reverse the order of the digits.
*/

function reverseInt(int) {
  // // typeof string
  // return String(int).split('').reverse().join('') 

  // typeof number
  // return +String(int).split('').reverse().join('') doesn't handle negative inputs
  return parseInt(String(int).split('').reverse().join('')) * Math.sign(int)
}

console.log(reverseInt(55896), typeof reverseInt(55896))
console.log(reverseInt(0))
console.log(reverseInt(-12))