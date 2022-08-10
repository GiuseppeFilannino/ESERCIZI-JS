

const person = {
  name: "",
  surname: "",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName viene eseguito con i valori forniti
let john=Object.create(person);
john.fullName = "john Doe";
let simon=Object.create(person);
simon.fullName = "Simon Collins";


console.log(john.fullName); // JOHN DOE
console.log(simon.fullName); // SIMON COLLINS

