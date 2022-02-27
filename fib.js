function fib(n) {
  if (n == 0) {
    console.log(0);
  } else {
    //              1~3    1 1+1 !+1+1 --> 3time
    for (let i = 1; i <= n; i++) {
      //   let a = 0;
      //   let b = 1;
      //   let c = a + b;
      //   //   // let a = 1;
      //   i = i + c;
      console.log(n + i);
    }
  }
}
// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
fib(6); // returns 2
// fib(8); // returns 21

// Fibonacci Sequence
// 1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987……
