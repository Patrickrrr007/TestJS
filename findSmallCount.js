// findSmallCount([1, 2, 3], 2); // returns 1
// findSmallCount([1, 2, 3, 4, 5], 0); // returns 0

function findSmallCount(arr, n) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      counter++;
    }
  }
  return counter;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
