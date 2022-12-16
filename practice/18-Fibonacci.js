// Implement a function that returns the fibonacci number at a given index. A fibonacci number is the sum of the previous two,

let cache = {};

function fibonacci(i) {
  if (i === 0) return 0
  if (i === 1) return 1

  if (cache[i]) {
    console.log(`in cache!`)
    return cache[i]
  } else {
    let result = fibonacci(i - 1) + fibonacci(i - 2);
    cache[i] = result;
    return result
  }
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))