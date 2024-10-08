export const helloAsync = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Hello ${name}`);
    }, 2000);
  });
};
