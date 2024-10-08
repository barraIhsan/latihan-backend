const person = {
  firstName: "Barra",
  lastName: "Ihsan",
};

for (const property in person) {
  console.log(`Property ${property}: ${person[property]}`);
}

// for in array
const weekdays = ["Sabtu", "Minggu"];

for (const i in weekdays) {
  console.log(`Hari: ${weekdays[i]}`);
}

// for of array
for (const day of weekdays) {
  console.log(`Hari: ${day}`);
}
