// For a given number of steps, print out a “staircase” using hashes and spaces.

function staircase(num) {
  let result = ''
  for (let i = 1; i <= num; i++) {
    result += '#'.repeat(i) + ' '.repeat(num - i) + '\n'
  }
  return result
}

console.log(staircase(3))