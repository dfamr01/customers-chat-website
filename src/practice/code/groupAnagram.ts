export async function main() {
  function getAnagramKey(word: string): string {
    return word.split("").sort().join("");
  }

  function groupAnagrams(anagrams) {
    const wordGroups = anagrams.reduce((groups, anagram) => {
      const word = getAnagramKey(anagram);
      groups[word] ??= [];
      groups[word].push(anagram);

      return groups;
    }, {});

    return Object.values(wordGroups);
  }
  const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.log("🚀 ~ main ~ res:", res);
}
