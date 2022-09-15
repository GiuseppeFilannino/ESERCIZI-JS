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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];



function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
     const person = persons.find(item => item.id === id);

    setTimeout(() => {
     

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}



function fetchJobById(id) {
  return new Promise((resolve, reject) => {
      const job = jobs.find(obj => obj.id === id);

    setTimeout(() => {


      if (job) {
        return resolve(JSON.stringify(job));
      }

      return reject(`Jobs with id: ${id} doesn't exist`);


    }, 500);

  });
}


Promise.race([fetchPersonById(3),fetchJobById(2)]).then((value) => { console.log(value)});