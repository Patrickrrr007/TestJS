// Write a function called "isAllUpperCase" that checks if all letters in the given
// string is uppercase.
function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  let allUpperCase = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      allUpperCase = false;
    }
  }
  return allUpperCase;
}

console.log(isAllUpperCase("a"));
console.log(isAllUpperCase("ABc"));
console.log(isAllUpperCase("ABC"));
console.log(isAllUpperCase(""));
console.log(isAllUpperCase("ABCDEFGHIJKLm"));

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false
