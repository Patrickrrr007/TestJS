function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}

fib(0); // returns 0
// fib(1); // returns 1
fib(2); // returns 1p
fib(3); // returns 2
// fib(8); // returns 21

// Fibonacci Sequence
// 1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987……
