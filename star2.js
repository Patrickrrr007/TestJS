// //stars2(1);
// // *
// stars2(2);
// // *
// // **
// // *
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

function star2(n) {
  // part1. 第一個到最多個的部分
  for (let i = 1; i <= n; i++) {
    let line = "";
    // console.log("i:" + i);
    // console.log("test");
    for (let j = 0; j < i; j++) {
      // line += "*";
      console.log("i:" + i + "第一層," + "j:" + j + "第二層,");
    }
    console.log(line);
  }

  // part2. 最多個到最底部
  //   for (let l = n - 1; l > 0; l--) {
  //     let line = "";
  //     for (let f = 0; f < l; f++) {
  //       line += "*";
  //     }
  //     console.log(line);
  //   }
}
star2(2);
console.log("-".repeat(50));
// star2(3);
