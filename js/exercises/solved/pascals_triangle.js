/*
  Given an integer rowIndex, return the rowIndexth (0-indexed)
  row of the Pascal's triangle.

  In Pascal's triangle, each number is the sum of the
  two numbers directly above it as shown:
         1          rowIndex 0
       1  1         rowIndex 1
     1  2  1        rowIndex 2
    1  3  3  1      rowIndex 3
  1  4  6  4  1     rowIndex 4
*/
const getRowValue = (row, index) => (
  (index < 0 || index >= row.length)
    ? 0
    : row[index]
)

const getRow = function (targetRowIndex) {
  // Every row index has a max column index equal to the rowIndex
  let previousRow = [1]

  // For each row until you get to the targeted row index
  for (let rowIdx = 0; rowIdx <= targetRowIndex; rowIdx++) {
    const currentRow = new Array(rowIdx + 1)

    for (let colIdx = 0; colIdx <= rowIdx; colIdx++) {
      currentRow[colIdx] = getRowValue(previousRow, colIdx - 1) + getRowValue(previousRow, colIdx)
    }

    previousRow = currentRow
  }

  return previousRow
}

console.log(getRow(0), 'should be [1]')
console.log(getRow(1), 'should be [1, 1]')
console.log(getRow(2), 'should be [1, 2, 1]')
console.log(getRow(3), 'should be [1, 3, 3, 1]')
console.log(getRow(4), 'should be [1, 4, 6, 4, 1]')
