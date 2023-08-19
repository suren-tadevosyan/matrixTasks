let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let arr2 = [
  ["h", "h", "h", "h", "h"],
  ["e", "e", "e", "e", "e"],
  ["l", "l", "l", "l", "l"],
  ["l", "l", "l", "l", "l"],
  ["o", "o", "o", "o", "o"],
];

function rotateMatrix(arr) {
  let rotatedArr = [];

  for (let i = 0; i < arr.length; i++) {
    rotatedArr.push([]);
    for (let j = 0; j < arr[i].length; j++) {
      rotatedArr[i][j] = arr[j][i];
    }
  }
  return rotatedArr;
}

console.log(rotateMatrix(arr2));
