/*
Given an array of items, reverse the order.
*/

function reverseArr(arr) {
  let tempEl;
  let mid = Math.floor(arr.length / 2)
  for (let i = 0; i < mid; i++) {
    let tempEl = arr[i];
    // arr[i] = arr[arr.length - 1 - i];
    // arr[arr.length - 1 - i] = tempEl
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], tempEl]
  }
  return arr
}

console.log(reverseArr([1, 2, 3, 4]))
console.log(reverseArr([1]))
console.log(reverseArr([1, 2, 3, 4, 5]))