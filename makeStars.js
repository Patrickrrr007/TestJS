// makeStars(1);
// // *
// makeStars(2);
// // *\n**
// makeStars(5);
// // *\n**\n***\n****\n*****

// function makeStars(stars) {
//   let makeStarsCounter = "";
//   let makeSlashn = "\\n";
//   if (stars > 1) {
//     for (let i = 0; i < stars; i++) {
//       makeSlashn = makeSlashn + "*";
//       //   makeSlashn += "*";
//     }
//   } else {
//     makeStarsCounter += "*";
//     // console.log("test");
//     return makeStarsCounter;
//   }

//   return makeSlashn;
// }

// console.log(makeStars(4));

function makeStars(n) {
  let result = "*";
  for (let i = 2; i <= n; i++) {
    let s = "\\n";
    for (let j = 0; j < i; j++) {
      s += "*";
    }
    result += s;
  }
  console.log(result);
}

makeStars(3);
makeStars(1);
makeStars(7);

// makeStars(1);
// // *
// makeStars(2);
// // *\n**
makeStars(5);
// // *\n**\n***\n****\n*****
