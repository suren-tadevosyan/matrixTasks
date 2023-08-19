let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1110, 11, 12],
  [12, 4, 2, 1],
  [55, 55, 55, 1],
];

function findLargestNumber(arr) {
  let sum = 0;
  let curSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum = arr[i].reduce((a, b) => a + b);
    if (sum < curSum) {
      sum = curSum;
      maxSum = arr.indexOf(arr[i]);
    }
  }

  return maxSum;
}

console.log(findLargestNumber(arr));
