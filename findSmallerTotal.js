// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0

function findSmallerTotal(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(findSmallerTotal([1, 2, 3], 3));
