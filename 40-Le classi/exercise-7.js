class Person {
  firstName="";
  lastName="";
  age="";

  constructor(firstName, lastName,age){
  
    this.firstName= firstName;
    this.lastName = lastName;
    this.age = age;
    
  }

get firstName(){
return this.firstName;
}

get lastName(){
return this.lastName;}


get age(){
return this.age;}


set firstName(value){
  return this.firstName = value;

}

set lastName(value){
  return this.lastName = value;

}
set age(value){
  return this.age = value;

} 

get fullName() {
  return `${this.firstName} ${this.lastName}`;
}




 
}

const person = new Person('Mario', 'Rossi', 25);


console.log(person.fullName);
console.log(person)



person.firstName = 'Maria';
person.lastName = 'Verdi';


console.log(person.fullName);