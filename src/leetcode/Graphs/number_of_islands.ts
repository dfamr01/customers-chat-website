/**
 * https://leetcode.com/problems/number-of-islands/description/
 * @param {character[][]} grid
 * @return {number}
 */

function isOutbounds(row, col, rows, columns) {
  if (row < 0 || row >= rows || col < 0 || col >= columns) {
    return true;
  }
  return false;
}

// assumption its ok to use the input grid
const numIslands = function (grid) {
  let islandsCount = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  function dfs(row, col) {
    if (isOutbounds(row, col, rows, columns)) {
      return;
    }

    if (grid[row][col] === "0") {
      return;
    }

    if (grid[row][col] === "1") {
      //mark visited
      grid[row][col] = "0";
    }

    const directions = [
      { x: 1, y: 0 }, //bottom
      { x: 0, y: 1 }, // right
      { x: -1, y: 0 }, // up
      { x: 0, y: -1 }, // left
    ];

    directions.forEach(({ x, y }) => {
      dfs(row + x, col + y);
    });
  }

  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < columns; k++) {
      if (grid[i][k] === "1") {
        islandsCount++;
        dfs(i, k);
      }
    }
  }
  return islandsCount;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const res1 = numIslands(grid);
console.log("🚀 ~ res1:", res1); //   Output: 1

const res2 = numIslands(grid2);
console.log("🚀 ~ res2:", res2); //   Output: 3
