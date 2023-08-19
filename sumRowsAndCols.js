let arr = [
  [1, 2, 1, 1],
  [0, 1, 4, 0],
  [1, 2, 9, 1],
  [0, 1, 4, 0],
  [1, 2, 0, 1],
];

function checkSumOfMatrixRowsAndCols(arr, number) {
  let colsSum = 0;
  let sumRows = 0;
  let checkedRows = [];
  let indexOfCols = [];
  for (let i = 0; i < arr.length; i++) {
    sumRows += arr[i].reduce((a, b) => a + b, 0);
    // console.log(sum);
    if (sumRows <= number) {
      checkedRows.push(arr[i]);
    }

    sumRows = 0;
  }
  console.log(checkedRows);
  for (let i = 0; i < checkedRows.length; i++) {
    for (let j = 0; j < checkedRows.length; j++) {
      colsSum += checkedRows[j][i];
      if (colsSum > 5 && !indexOfCols.includes(i)) {
        indexOfCols.push(i);
        // console.log(indexOfCols);
      }
    }

    // console.log(colsSum);
    colsSum = 0;
  }

  let indices = indexOfCols.sort((a, b) => b - a);
  console.log(indices);

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
