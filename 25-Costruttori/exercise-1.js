

const person = {
  firstname: "",
  lastname: "",

  get name() {
    return this.firstname;
  },
  get surname() {
    return this.lastname;
  },

  set name(name) {
    return this.firstname = name;
  },
  set surname(surname) {
    return this.lastname = surname;
  },



  fullName() {
    return `${this.name} ${this.surname}`
  }



};

// set fullName viene eseguito con i valori forniti
let john=Object.create(person);
let simon=Object.create(person);

john.name="jhon";
john.surname="Doe";
simon.name="Simon";
simon.surname="Collins";




console.log(john.fullName()); // JOHN DOE
console.log(simon.fullName()); // SIMON COLLINS





