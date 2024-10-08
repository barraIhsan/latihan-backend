class Person {
  constructor() {
    this.firstName = "";
  }

  set setName(name) {
    this.firstName = name;
  }

  get getName() {
    return this.firstName;
  }
}

const budi = new Person();

budi.setName = "Budi";
console.log(budi.firstName);
