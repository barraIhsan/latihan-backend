const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Barra";
person[lastName] = "Ihsan";

console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);
