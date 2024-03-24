/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 **/

function getMapCount(nums) {
  const mapCount = nums.reduce((acc, num) => {
    acc[num] ??= 0;
    acc[num]++;

    return acc;
  }, {});
  return mapCount;
}

function getMostFreqBucket(mapCount, k) {
  const mostFreq = [];

  for (const [num, count] of Object.entries(mapCount)) {
    mostFreq[count] ??= [];
    if (mostFreq[count].length < k) {
      mostFreq[count].push(num);
    }
  }
  return mostFreq;
}

function getMostFreq(bucket, k) {
  let res = [];
  // search the bucket for the most frequent and add to the res array
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      res = res.concat(bucket[i]);
    }
    if (res.length === k) {
      return res;
    }
  }
  return res;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const mapCount = getMapCount(nums);

  const mostFreqBucket = getMostFreqBucket(mapCount, k);

  return getMostFreq(mostFreqBucket, k);
};
