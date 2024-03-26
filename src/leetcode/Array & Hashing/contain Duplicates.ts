/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 */

/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  const set = new Set(nums);
  if (nums.length === set.size) {
    return false;
  }
  return true;
};

const nums = [1, 2, 3, 1];
containsDuplicate(nums); // Output: true
