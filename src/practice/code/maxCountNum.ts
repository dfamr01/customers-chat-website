function maxCount(arr: number[]) {
  if (!arr?.length) {
    return null;
  }

  const mapCount = new Map();
  let maxNum = arr[0];
  let maxCount = 0;

  for (const num of arr) {
    const count = (mapCount.get(num) || 0) + 1;
    if (count > maxCount) {
      maxCount = count;
      maxNum = num;
    }
    mapCount.set(num, count);
  }

  return maxNum;
}
const arr = [1, 3, 2, 3, 4, 3, 2, 2, 3];
const rrr = maxCount(arr);
console.log("🚀 ~ rrr:", rrr); //3
