class Pelajar {
  nama = "";

  constructor(gender) {
    this.gender = gender;
  }

  belajar() {
    console.log(`Pelajar sedang giat belajar`);
  }
}

class SMA extends Pelajar {
  constructor(nama, gender) {
    super(gender);
    this.nama = nama;
  }

  belajar() {
    console.log(`${this.nama} sedang giat belajar sebagai anak SMA`);
  }
}

const eko = new Pelajar("Pria");
const budi = new SMA("Budi", "Pria");

// calling method
eko.belajar();
budi.belajar();
