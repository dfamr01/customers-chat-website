/**
https://leetcode.com/problems/search-a-2d-matrix/description/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let start = 0;
  let end = rows * columns - 1; //fallten the matrix

  while (start <= end) {
    const midIdx = Math.floor((end + start) / 2);
    const midRow = Math.floor(midIdx / columns);
    const midCol = midIdx % columns;
    const midValue = matrix[midRow][midCol];

    if (midValue === target) {
      return true;
    }

    if (midValue < target) {
      start = midIdx + 1;
    } else {
      end = midIdx - 1;
    }
  }
  return false;
};

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
