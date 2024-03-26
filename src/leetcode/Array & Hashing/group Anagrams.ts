/**
 * https://leetcode.com/problems/group-anagrams/description/
 */

function getSortedString(str) {
  return str.split("").sort().join("");
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const anagramsMap = strs.reduce((acc, str) => {
    const ang = getSortedString(str);
    acc[ang] ??= [];
    acc[ang].push(str);
    return acc;
  }, {});

  return Object.values(anagramsMap);
};

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
