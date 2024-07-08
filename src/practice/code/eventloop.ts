export async function main() {
  const promise = new Promise((res, rej) => {
    console.log("promise 1");
    setTimeout(() => {
      res("callback");
    }, 0);
    console.log("promise 2");
  });

  promise.then((result) => {
    console.log("promise ", result);
  });

  console.log("end");
}

//what is the output?
