// This implementation ensures that:

// The first call is executed immediately.
// Subsequent calls are delayed to maintain the specified interval.
// If a call is made before the delay has passed, it's scheduled for the next available slot.

function throttle(func, delay) {
  let nextScheduledRun = 0;
  return function helper(...args) {
    if (nextScheduledRun - Date.now() <= 0) {
      nextScheduledRun = Date.now() + delay;
      func.apply(this, args);
      return;
    }
    const offset = nextScheduledRun - Date.now();

    nextScheduledRun = Date.now() + offset + delay;
    setTimeout(func, offset);
  };
}

function sleep(delay) {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

async function main() {
  const print = () => {
    console.log("time", new Date().toISOString());
  };

  const foo = throttle(print, 1000);
  foo();
  await sleep(5000);
  foo();
  foo();
}
main();
