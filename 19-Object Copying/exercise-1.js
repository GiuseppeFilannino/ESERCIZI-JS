const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = Object.assign({}, person1);
person2.firstName= 'Simon';

// il valore di person1 cambia con quello di person2 perché nel caso degli oggetti
// viene passato un riferimento alla locazione di memoria nella quale adesso ci sarà il valore di person2

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);