const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(value) {
  return new Promise((resolve, reject) => {


    let person = persons.find(persona => persona.id === value)
    if (person) {
      resolve(person)
    }
    else {
      return reject(`ID number ${value} didn't match with any person`);


    }



  });
}


let promise = fetchPersonById(2);
promise
.then(person=>{console.log(person)})
.catch(err => console.log(err));