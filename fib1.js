function fib1(n) {
  let arr = [0, 1];
  let i = 0;
  while (arr.length <= n) {
    arr.push(arr[i] + arr[i + 1]); // print the sequence of the number
    i++;
  }
  console.log(arr); // print the sequence
  console.log(arr[n]); // print the index of number
}
fib1(8);
