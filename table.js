function table(n) {
  for (let i = 0; i < n; i++) {
    let Num = "";
    // frontNum += n + " x ";
    // console.log(frontNum);
    for (let j = 1; j < 10; j++) {
      //   let endNum = "";
      //   endNum += j + " = " + n * j;
      //   frontNum += endNum;
      //   console.log(frontNum);
      let formula = n + " x " + j + " = " + n * j + "\n";
      Num += formula;
      //   console.log(n + " x " + j + " = " + n * j);
    }
    return Num;
  }
}
// console.log(table(3));
// table(3);
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 9 = 27

function table1(m) {
  for (let i = 1; i < 10; i++) {
    let formula = m + " x " + i + " = " + m * i;
    console.log(formula);
  }
}
// table1(3);
// console.log("-".repeat(50));
// table1(7);

function table9to9() {
  for (let u = 1; u < 10; u++) {
    // console.log(u);
    for (let o = 1; o < 10; o++) {
      console.log(u + " x " + o + " = " + u * o);
    }
  }
}

table9to9();

// Q: print out this array
// 1 x 1 = 1  2 x 1 = 2  3 x 1 = 3
// 1 x 2 = 2  2 x 2 = 4  3 x 2 = 6
// 1 x 3 = 3  2 x 3 = 6  3 x 3 = 9
// 1 x 4 = 4  2 x 4 = 8  3 x 4 = 12
// 1 x 5 = 5  2 x 5 = 10  3 x 5 = 15
// 1 x 6 = 6  2 x 6 = 12  3 x 6 = 18
// 1 x 7 = 7  2 x 7 = 14  3 x 7 = 21
// 1 x 8 = 8  2 x 8 = 16  3 x 8 = 24
// 1 x 9 = 9  2 x 9 = 18  3 x 9 = 27

// 4 x 1 = 4  5 x 1 = 5  6 x 1 = 6
// 4 x 2 = 8  5 x 2 = 10  6 x 2 = 12
// 4 x 3 = 12  5 x 3 = 15  6 x 3 = 18
// 4 x 4 = 16  5 x 4 = 20  6 x 4 = 24
// 4 x 5 = 20  5 x 5 = 25  6 x 5 = 30
// 4 x 6 = 24  5 x 6 = 30  6 x 6 = 36
// 4 x 7 = 28  5 x 7 = 35  6 x 7 = 42
// 4 x 8 = 32  5 x 8 = 40  6 x 8 = 48
// 4 x 9 = 36  5 x 9 = 45  6 x 9 = 54

// 7 x 1 = 7  8 x 1 = 8  9 x 1 = 9
// 7 x 2 = 14  8 x 2 = 16  9 x 2 = 18
// 7 x 3 = 21  8 x 3 = 24  9 x 3 = 27
// 7 x 4 = 28  8 x 4 = 32  9 x 4 = 36
// 7 x 5 = 35  8 x 5 = 40  9 x 5 = 45
// 7 x 6 = 42  8 x 6 = 48  9 x 6 = 54
// 7 x 7 = 49  8 x 7 = 56  9 x 7 = 63
// 7 x 8 = 56  8 x 8 = 64  9 x 8 = 72
// 7 x 9 = 63  8 x 9 = 72  9 x 9 = 81
