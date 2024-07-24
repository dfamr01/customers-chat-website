function debounce(fn, delay) {
  let timeoutId = null;
  return function () {
    if (!timeoutId) {
      fn();
    } else {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
  };
}
