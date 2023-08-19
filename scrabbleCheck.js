let arr = [
  ["h", "e", "l", "s", "k"],
  ["e", "s", "e", "t", "b"],
  ["l", "g", "d", "o", "g"],
  ["l", "f", "l", "r", "o"],
  ["o", "t", "r", "m", "e"],
];

function scrabbleCheck(arr, word) {
  let strRows = "";
  let strColummns = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      strRows += arr[i][j];
      if (strRows.includes(word)) {
        return true;
      }
    }
    strRows = "";

    for (let k = 0; k < arr[i].length; k++) {
      strColummns += arr[k][i];
      if (strColummns.includes(word)) {
        return true;
      }
    }

    strColummns = "";
  }
  return false;
}

console.log(scrabbleCheck(arr, "hello")); // true

console.log(scrabbleCheck(arr, "set")); // true

console.log(scrabbleCheck(arr, "llp")); // false

console.log(scrabbleCheck(arr, "storm")); // true
