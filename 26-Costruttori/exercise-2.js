


function Person(name,surname){
this.name=name;
this.surname=surname;
this.fullname = function() {return `${this.name} ${this.surname}`; }
};

let jhon= new Person('Jhon', 'Doe');
let simon= new Person('Simon', 'Colling');

console.log(jhon.fullname()); // John Doe
console.log(simon.fullname()); // Simon Collins

