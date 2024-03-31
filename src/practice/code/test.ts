function randomArray(input) {
  for (let i = input.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j]] = [input[j], input[i]]; //swap
  }
  return input;
}

export async function main() {}

//output
