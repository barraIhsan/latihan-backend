const date = new Date();

console.log(date); // object
console.log(date.toString());
console.log(date.toLocaleString("id-ID"));
console.log(date.toISOString()); // string

const timestamp = Date.now();
console.log(timestamp);

console.log(Math.ceil("99.1"));
