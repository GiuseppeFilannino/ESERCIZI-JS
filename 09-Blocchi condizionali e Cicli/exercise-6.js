function getKeys(person) {
let newArray=[]
  for(person.keys in person){
  newArray.push(person.keys);}
 return newArray;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

