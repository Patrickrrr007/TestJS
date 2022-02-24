// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]
function findAllSmall(arr, n) {
  let blank = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      // 記得ＡＲＲＡＹ用ＰＵＳＨ！！
      blank.push(arr[i]);
    }
  }
  console.log(Object.prototype.toString.call(blank));
  return blank;
}
// console.log(Object.prototype.toString.call(blank));
console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]);
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]
