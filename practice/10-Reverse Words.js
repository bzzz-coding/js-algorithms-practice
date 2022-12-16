// Given a phrase, reverse the order of the characters of each word.

function reverseWord(word) {
  let result = ''
  for (const letter of word) {
    result = letter + result
  }
  return result
}

function reverseEachWord(str) {
  return str.split(' ').map(word => reverseWord(word)).join(' ')
}

console.log(reverseEachWord('I love JavaScript!'))