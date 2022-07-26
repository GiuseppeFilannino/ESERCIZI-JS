function calculateAverageAge(persons) {
  let averAge = [];
  averAge = sum(persons) / 10;

  function sum(persons) {
    let somma = 0;
    for (let i = 0; i < 10; i++) {
      somma = somma + persons[i].age;


    }
    return somma;
  }
return averAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }

];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log( `L'età media dell'array "persons" è di ${averageAge} anni`);
