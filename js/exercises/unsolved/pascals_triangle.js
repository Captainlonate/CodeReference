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

const getRow = function (targetRowIndex) {

}

console.log(getRow(0), 'should be [1]')
console.log(getRow(1), 'should be [1, 1]')
console.log(getRow(2), 'should be [1, 2, 1]')
console.log(getRow(3), 'should be [1, 3, 3, 1]')
console.log(getRow(4), 'should be [1, 4, 6, 4, 1]')
