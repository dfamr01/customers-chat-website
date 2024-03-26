/**
https://leetcode.com/problems/rotate-image/

*/

function transpose(matrix) {
  const n = matrix.length;
  // transpose matrix
  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      const temp = matrix[i][k];
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = temp;
    }
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  transpose(matrix);
  for (const row of matrix) {
    row.reverse();
  }
};
