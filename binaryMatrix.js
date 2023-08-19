let arr = [
  [
    [1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],

  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
];

function findLargestSqMatrix(arr) {
  let onlyOnesArr = [];
  let hasOnlyOnes = true;
  let isNxN = true;
  let onlyNxN = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        if (arr[i][j][k] === 0) {
          hasOnlyOnes = false;
          break;
        }
      }
      if (!hasOnlyOnes) {
        break;
      }
    }

    if (hasOnlyOnes) {
      onlyOnesArr.push(arr[i]);
    }

    hasOnlyOnes = true;
  }

  for (let i = 0; i < onlyOnesArr.length; i++) {
    for (let j = 0; j < onlyOnesArr[i].length; j++) {
      if (onlyOnesArr[i].length / onlyOnesArr[i][j].length !== 1) {
        isNxN = false;
        break;
      }
    }

    if (isNxN) {
      onlyNxN.push(onlyOnesArr[i]);
    }

    isNxN = true;
  }

  let largestArray = onlyNxN[0];
  for (let i = 0; i < onlyNxN.length; i++) {
    if (onlyNxN[i].length > largestArray.length) {
      largestArray = onlyNxN[i];
    }
  }

  return (
    largestArray || "There is no nested matrix that contains only number 1!"
  );
}

console.log(findLargestSqMatrix(arr));
