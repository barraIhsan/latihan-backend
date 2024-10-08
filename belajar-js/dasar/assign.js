const target = { firstName: "Barra" };
const source = { firstName: "Ahmad", lastName: "Yasin" };

let result = Object.assign(target, source);

console.log(result);
console.log(target);
console.log(source); // tidak diubah
