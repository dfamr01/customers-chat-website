export function memo(cb) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("cached value returned");
      return cache.get(key);
    }
    const cbResult = cb(...args);
    cache.set(key, cbResult);
    console.log("none cached value returned");

    return cbResult;
  };
}
