class Person {

  
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
static fromObject(value){
  return new this(value.firstName, value.lastName)
  }


}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
console.log(person);

