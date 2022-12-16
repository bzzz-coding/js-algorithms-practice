// Given an array of numbers, calculate the mean, median, and mode.

function getMean(arr) {
  return (arr.reduce((sum, num) => sum + num, 0)) / arr.length
}

function getMedian(arr) {
  let sorted = [...arr].sort((a, b) => a - b)
  let mid = Math.floor(arr.length / 2)
  if (arr.length % 2=== 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
  return sorted[mid]
}

function getMode(arr) {
  const obj = arr.reduce((obj, num) => {
    obj[num] ? obj[num]++ : obj[num] = 1;
    return obj
  }, {})
  let most = 0;
  let mode;
  for (const key of Object.keys(obj)) {
    if (obj[key] > most) {
      most = obj[key];
      mode = key
    }
  }
  return mode
}

console.log(getMean([1, 1, 2, 2, 2, 3, 3, 4, 4]))
console.log(getMedian([1, 1, 2, 2, 2, 3, 3, 4, 4]))
console.log(getMode([1, 1, 2, 2, 2, 3, 3, 4, 4]))