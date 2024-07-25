function count(num) {
  let sum = num;
  function innerCount(nextNum) {
    if (nextNum === undefined) {
      return sum;
    }
    sum += nextNum;
    return innerCount;
  }
  return innerCount;
}
