const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("halo");
  }, 300);
});

myPromise.then((arr) => console.log(arr));
