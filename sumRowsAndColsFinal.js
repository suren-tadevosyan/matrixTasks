let arr = [
  [1, 2, 1, 1],
  [0, 1, 4, 0],
  [1, 2, 9, 1],
  [0, 1, 4, 5],
  [1, 2, 0, 1],
];

function checkSumOfMatrixRowsAndCols(arr, number) {
  let colsSum = 0;
  let sumRows = 0;
  let checkedRows = [];
  let indexOfCols = [];
  for (let i = 0; i < arr.length; i++) {
    sumRows += arr[i].reduce((a, b) => a + b, 0);

    if (sumRows <= number) {
      checkedRows.push(arr[i]);
    }

    sumRows = 0;
  }

  for (let i = 0; i < checkedRows.length; i++) {
    for (let j = 0; j < checkedRows.length; j++) {
      colsSum += checkedRows[j][i];
      if (colsSum > number && !indexOfCols.includes(i)) {
        indexOfCols.push(i);
      }
    }

    colsSum = 0;
  }

  let indices = indexOfCols.sort((a, b) => b - a);

  for (let i = 0; i < checkedRows.length; i++) {
    for (let colsToDelete = 0; colsToDelete < indices.length; colsToDelete++) {
      checkedRows[i] = checkedRows[i].filter(
        (elem, index) => index !== indices[colsToDelete]
      );
    }
  }

  return checkedRows;
}

console.log(checkSumOfMatrixRowsAndCols(arr, 5));
