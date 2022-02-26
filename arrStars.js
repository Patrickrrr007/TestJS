// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****

function stars(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
// stars(5);
stars(1);
