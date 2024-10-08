class InputError extends Error {
  kode = null;

  constructor(msg, kode) {
    super(msg);
    this.kode = kode;
  }
}

const convert = (num) => {
  if (Number(num)) return Number(num);
  else throw new InputError("Bukan angka", 979);
};

try {
  let num = "satu";
  if (convert(num)) {
    console.log("Variable num adalah angka");
  }
} catch (error) {
  console.log("Variable num bukan angka");
  console.error(`Error: ${error.message} - ${error.kode}`);
}
