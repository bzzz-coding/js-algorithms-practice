/*
Given an array and a size, split the array items into a list of arrays of the given size.
*/

function chunkArr(arr, size) {
  let result = []
  let currentChunk = []
  arr.forEach((el, i) => {
    currentChunk.push(el)
    if ((i + 1) % size === 0) {

      result.push(currentChunk);
      currentChunk = [];
    }
  })
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  return result
}

function chunkArr(arr, size) {
  let result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i+size))
  }
  return result
}

console.log(chunkArr([1, 2, 3, 4], 2))
console.log(chunkArr([1, 2, 3, 4], 3))
console.log(chunkArr([1, 2, 3, 4], 5))