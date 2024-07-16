function flattenArray<T>(arr: Array<T | T[]>): T[] {
  return arr.reduce<T[]>((accumulator, value) => {
    if (Array.isArray(value)) {
      return accumulator.concat(flattenArray(value));
    } else {
      return accumulator.concat(value);
    }
  }, []);
}

function flattenArray2(arr) {
  let result = [];
  arr?.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray2(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

function flattenArray3(arr) {
  const flattenedArray = [];
  const stack = [...arr];
  while (stack.length) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray.reverse();
}

export async function main() {
  const res1 = flattenArray([1, [2], 3]);
  const res3 = flattenArray3([1, [2], 3, [4, [5]]]);
  const res2 = flattenArray2([1, [2], 3, [4, [5]]]);
  console.log("🚀 ~ main ~ res1:", res1);
  console.log("🚀 ~ main ~ res2:", res2);
  console.log("🚀 ~ main ~ res3:", res3);
}
