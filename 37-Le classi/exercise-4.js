
class BankAccount {

    constructor(saldo){
    this.saldo= saldo;
    console.log(`your account balance is  ${this.saldo} €`);
    }

     deposit(value) {
    return this.saldo += value ,
    console.log(`you have deposited ${value} €`),
    console.log(`your account balance is  ${this.saldo} €`);
    }

    withdraw(value){
        return this.saldo -= value ,
        console.log(`you have withdrawn  ${value} €`),
        console.log(`your account balance is  ${this.saldo} €`);
    }


 view(){

console.log(`your account balance is  ${this.saldo} €`);
}

};



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);