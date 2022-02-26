let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function arrFor9Time9() {
  for (let i = 0; i < arr.length; i++) {
    // Arr 2nd。      0~2層
    for (let j = 0; j < arr[i].length; j++) {
      // 依序列出來
      // console.log(arr[i][j]);
      // console.log("i:" + i + " " + "j:" + j);
      // document.write(arr[i][j]);
      console.log(arr[i][j]);
      // document.write("<br/>");
      // Arr 3nd
      //   for (let k = 0; k < ; k++) {
      //   }
    }
    // 3 * 3 Array
    //   document.write("i:" + i + " " + "j:" + j);
    //   document.write(arr[i]);
    // document.write("<br/>");
    console.log("<br/>");
  }
}
// Arr 1nd.       0~3層

arrFor9Time9();
