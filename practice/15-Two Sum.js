// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// function twoSum(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result
// }


function twoSum(arr, target) {
  let result = [];
  let seen = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterPart = target - currentNum;
    if (seen[counterPart] !== undefined) {
      result.push([counterPart, currentNum]);
    } else {
      seen[currentNum] = true
    }
  }
  return result
}

  console.log(twoSum([1, 2, 2, 3, 4], 4))