/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {};

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
