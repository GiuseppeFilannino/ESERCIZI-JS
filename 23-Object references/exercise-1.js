const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

function Print(){
for(i of Object.keys(person)){
console.log(`${i}: ${person[i]}`)};
}

Print();

