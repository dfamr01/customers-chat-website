import { fill } from "lodash";
import { shuffleArray } from "./shuffleArray";

Array.prototype.unique = function () {
  return Object.values(
    this.reduce((acc, el) => {
      acc[el] = el;
      return acc;
    }, {})
  );
};

interface Cat {
  meow: number;
}

interface Dog {
  bark: number;
}

function isCat(animal: Dog | Cat): animal is Cat {
  if ((animal as Cat).meow) {
    return true;
  }
  return false;
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
    // TypeScript knows animal is a Cat here
    console.log("Cat sound: Meow ", animal.meow);
  } else {
    // TypeScript knows animal is a Dog here
    console.log("Dog sound: Bark ", animal.bark);
  }
}

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
