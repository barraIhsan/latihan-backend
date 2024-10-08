const helloWorld = () => {
  console.log(`Hello World`);
};

function sayHello(name) {
  console.log(`Hello ${name}`);
  helloWorld();
}

function sayGoodbye(name) {
  console.log(`Goodbye ${name}`);
}

// export const namaSekolah = "Sekolah Developer Indonesia";
const namaSekolah = "Sekolah Developer Indonesia";

// export multiple
export { sayHello as hello, sayGoodbye, namaSekolah };
