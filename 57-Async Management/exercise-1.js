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

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    if (id >= 0 && id <= 2) {
      resolve(id);

    } else {
      reject(new Error('ID non valido'));
    }
  });
}

// let promise= fetchPersonById(0);
//  promise= fetchPersonById(1);
//  promise= fetchPersonById(2);
//  promise= fetchPersonById(3);  //error


let promise= fetchPersonById(0);
promise
.then((id)=> {console.log(persons[id])
return 1;},)
.then((id)=> {console.log(persons[id]);
return 2;})
.then((id)=> {console.log(persons[id]);})