export function leap(year) {
  // check number and make sure it's positive
  if (typeof year !== "number") throw TypeError("Input a number");
  if (year < 0) throw Error("Input a positive integer");

  // the actual check
  // return year % 400 == 0 ? true : year % 100 == 0 ? false : year % 4 == 0 ? true : false;
  return year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0);
}
