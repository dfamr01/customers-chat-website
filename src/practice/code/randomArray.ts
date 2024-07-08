export const randomArr = <T>(array: T[]): T[] => {
  return array;
};

/**
 * return random integer between min (inclusive) and max (exclusive)
 *
 * @param {number} min - The minimum number must be integer
 * @param {number} max - The upper bound number
 * @return {number} - Return random integer
 */
export function getRandomInteger(min: number, max: number): number {
  if (typeof min !== "number") {
    // if (isNaN(+min)) {
    throw new Error(`InvalidInput: min ${min} is not valid.`);
  }
  if (!(max > 0)) {
    throw new Error(`InvalidInput: max value is not valid ${max}`);
  }

  if (min > max) {
    throw new Error(`InvalidInput: min ${min} is lower than max ${max}`);
  }

  const minUpper = Math.ceil(min);
  const maxLower = Math.floor(max);

  return Math.floor(Math.random() * (maxLower - minUpper) + minUpper);
}

/**
 * return a random array. that each element is between [lowerBound,upperBound]
 *
 * @param {number} lowerBound - minimum number of the integer.
 * @param {number} upperBound - maximum number of the random integer.
 * @param {number} length - maximum number of the random integer.
 * @returns {number[]} - return a new random array.
 * @throws {Error} - throw an error when the inputs not valid
 */
export function createRandomArray(
  lowerBound: number,
  upperBound: number,
  length: number
): number[] {
  if (!Number.isInteger(length) || !(length > 0)) {
    throw new Error(
      `createRandomArray: InvalidInput length ${length} is not valid.`
    );
  }

  return Array.from({ length }, () =>
    getRandomInteger(lowerBound, upperBound + 1)
  );
}
