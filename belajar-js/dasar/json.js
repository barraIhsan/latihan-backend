const person = {
  firstName: "Barra",
  lastName: "Ihsan",
  address: {
    country: "Indonesia",
    city: "Bogor",
  },
};

const json = JSON.stringify(person);
const personAgain = JSON.parse(json);

console.log(json);
console.log(typeof json);
console.log(personAgain);
console.log(typeof personAgain);
