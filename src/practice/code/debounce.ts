function debounce(fn, wait) {
  let timeoutId = null;
  function help() {
    if (!timeoutId) {
      fn();
    } else {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, wait);
  }
  return help;
}
