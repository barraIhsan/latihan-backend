const names = "Barra Ihsan De Nugra".split(" ");

console.table(names);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hasil = numbers.reduce((result, value) => result + value);
console.log(hasil);

const hasil2 = numbers.reduceRight((result, value) => result + value);
console.log(hasil2);

let person = { name: "barra" };

Object.freeze(person); // di freeze tidak bisa diubah maupun di delete

person.name = "yasin";
console.log(person);
delete person.name;
console.log(person);

let person2 = { name: "barra" };

Object.seal(person2); // di seal tidak bisa diubah tapi bisa di delete

person2.name = "yasin";
console.log(person2);
delete person2.name;
console.log(person2);
