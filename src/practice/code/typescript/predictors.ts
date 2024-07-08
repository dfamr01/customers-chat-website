interface Cat {
  meow: number;
}

interface Dog {
  bark: number;
}

// predictor
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
  const animal = {
    bark: 2,
  } as Dog;

  makeSound(animal);
}
