// Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.

// // O(NlogN)
// function findMaxDiff(arr) {
//   if (arr.length < 2) {
//     return `Input not valid.`
//   }
//   let sortedPrices = [...arr].sort((a, b) => a - b);
//   return [sortedPrices[0], sortedPrices[sortedPrices.length - 1]]
// }

// // O(N)
// function findMaxDiff(arr) {
//   if (arr.length < 2) {
//     return `Input not valid.`
//   }
//   return [Math.min(...arr), Math.max(...arr)]
// }

// one loop O(N)
function findMaxDiff(arr) {
  if (arr.length < 2) {
    return `Input not valid.`
  }
  let min = arr[0], max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  return [min, max]
}

console.log(findMaxDiff([1, 2, 3, 4, 5]))
console.log(findMaxDiff([2, 1, 5, 3, 4]))
console.log(findMaxDiff([2, 10, 1, 3]))
console.log(findMaxDiff([2, 1, 2, 11]))
console.log(findMaxDiff([2]))
console.log(findMaxDiff([2, 2]))
console.log(findMaxDiff([]))