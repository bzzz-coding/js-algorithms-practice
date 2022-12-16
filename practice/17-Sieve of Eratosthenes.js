// For a given number, find all the prime numbers from zero to that number.

function findAllPrimes(num) {
  let arr = new Array(num + 1).fill(true);
  arr[0] = false; 
  arr[1] = false;

  console.log(arr)

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      arr[i * j] = false;
    }
  }
  console.log(arr)

  let result = [];
  arr.forEach((el, i) => {
    if (el === true) {
      result.push(i)
    }
  })
  return result 
}

console.log(findAllPrimes(10))