// Given a phrase, capitalize every word.

function capEveryWord(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capEveryWord('hello world'))