function randomArray(input) {
  for (let i = input.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j]] = [input[j], input[i]]; //swap
  }
  return input;
}

export function mainPractice(input) {
  const fromArr = [...input];

  const toArr = randomArray([...input]);
  const map = {};
  for (let i = 0; i < fromArr.length; i++) {
    const toIdx = (i + 1) % toArr.length;
    const from = toArr[i];
    const to = toArr[toIdx];
    map[from] = to;
  }

  return map;
}

export function main() {
  return;
  const input = ["guy", "dudu", "michal", "alon"];

  const from = ["dudu", "michal", "guy", "alon"];

  // const to = [  "michal"];
  const to = ["guy", "dudu", "michal", "alon"]; //random
  // const to = ["guy", "dudu", "michal", "alon"];

  const res = mainPractice(input);
  console.log("🚀 ~ res:", res);
}

//output
