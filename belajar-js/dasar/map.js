const map = new Map();

map.set("name", "Barra Ihsan");
map.set("usia", 16);
map.set(["kodein", 1], "code");

console.log(map.get("name"));
console.log(map.get("kodein"));

for (const ele of map) {
  console.log(`Key = ${ele[0]}. Value = ${ele[1]}`);
}

const iterator = map.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
