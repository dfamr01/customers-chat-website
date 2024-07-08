export const randomArr = <T>(array: T[]): T[] => {
  return array;
};

/**
 * shuffles an array.
 *
 * @template T - the type element in the array.
 * @param {T[]} array - the array to shuffle.
 * @returns {T[]} - return a new shuffled array, if the input is empty or undefined return an empty array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  if (!array?.length) {
    new Error(`InvalidInput: array ${array} is not `);
  }
  const copiedArray = [...array];
  for (let index = copiedArray.length - 1; index > 0; index--) {
    const upperBound = index + 1;
    const randomIndex = Math.floor(Math.random() * upperBound);

    // swap elements at the current index and the random index
    [copiedArray[randomIndex], copiedArray[index]] = [
      copiedArray[index],
      copiedArray[randomIndex],
    ];
  }
  return copiedArray;
}
interface StringMap {
  [key: string]: string;
  aa: boolean;
}

type StringNumberMap = Map<string, number>;

function fff(): StringNumberMap {
  const m = new Map([["key", 111]]);
  return m;
}

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
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
