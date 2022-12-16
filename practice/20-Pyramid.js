// For a given number of levels, print out a “pyramid” using hashes and spaces.

function pyramid(num) {
  result = ''
  for (let i = 1; i <= num; i++) {
    result += ' '.repeat(num - 1 - i) + '#'.repeat(1 + (i - 1) * 2) + ' '.repeat((num - i) / 2) + '\n'
  }
  return result
}

// 1
// 3
// 5
console.log('  #  \n ### \n#####\n')
console.log(pyramid(3))