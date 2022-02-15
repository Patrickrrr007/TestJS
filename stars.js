// let stars = prompt("輸入你要的星星數");

// var a =

// alert(stars);

// let text1 = "sea";
// let text2 = "food";
// let result1 = text1.concat();
// let result2 = text1.concat(text2);
// console.log(result1, result2);

// function star(stars) {

// }

function star(stars) {
  let result = "";
  for (let i = 0; i < stars; i++) {
    result += "*";
  }
  return result;
}

// console.log(star(15));
let stars = prompt("請輸入你要的星星數");
alert("你要的星星數是：" + star(stars));
