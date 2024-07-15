class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  twoSum(nums, index, target) {
    const complementMap = new Map();

    for (let i = index + 1; i < nums.length; i++) {
      const num = nums[i];

      if (complementMap.get(num) && complementMap.get(num).length !== 3) {
        complementMap.get(num).push(num);
      }
      const complement = -(num + target);
      if (complementMap.get(complement)?.length === 3) {
        continue;
      }
      complementMap.set(complement, [target, num]);
    }
    return Array.from(complementMap.values());
  }
  threeSum(nums) {
    let result = [];
    nums.sort();
    const setNums = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (setNums.has(nums[i])) {
        continue;
      }
      setNums.add(nums[i]);
      const twoNumsRes = this.twoSum(nums, i, nums[i]);

      result = result.concat(twoNumsRes);
    }
    result = result.filter((res) => res.length === 3);
    console.log("🚀 ~ Solution ~ threeSum ~ result:", result);

    return result;
  }
}

export async function main() {
  new Solution().threeSum([-2, -1, 1, 2]);
  // new Solution().threeSum([0, 0, 0]);
  // Solution class as defined previously
  // return;
  const solution = new Solution();

  const testCases = [
    { input: [0, 0, 0], expected: [[0, 0, 0]] },
    { input: [1, 2, 3, 4, 5], expected: [] },
    {
      input: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { input: [-3, -2, -1, -4], expected: [] },
    { input: [1, 2, 3, 4, 5], expected: [] },
    {
      input: [-2, 0, 1, 1, 2],
      expected: [
        [-2, 0, 2],
        [-2, 1, 1],
      ],
    },
    { input: [-2, -2, 0, 0, 2, 2], expected: [[-2, 0, 2]] },
    {
      input: [-5, 2, -1, -2, 3, 1, 0, 2, 4, -3],
      expected: [
        [-5, 1, 4],
        [-5, 2, 3],
        [-3, -2, 5],
        [-3, 0, 3],
        [-2, -1, 3],
        [-2, 1, 1],
        [-1, 0, 1],
      ],
    },
    { input: [], expected: [] },
    { input: [1, 2], expected: [] },
    { input: [1, 2, -1], expected: [] },
    { input: [-1, 0, 1], expected: [[-1, 0, 1]] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = solution.threeSum(input);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      console.log("input", input);
      console.log("result", result);
      console.log("failed", expected);
    }
    console.log(
      `Test Case ${index + 1}:`,
      JSON.stringify(result) === JSON.stringify(expected)
        ? "Passed"
        : `Failed - Expected: ${JSON.stringify(
            expected
          )}, Got: ${JSON.stringify(result)}`
    );
  });
}
