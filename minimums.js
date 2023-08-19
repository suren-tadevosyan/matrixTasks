let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [12, 4, 2, 1],
  [55, 55, 55, 1],
];

function findMinimums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.min(...arr[i]));
  }

  return newArr;
}

console.log(findMinimums(arr));
