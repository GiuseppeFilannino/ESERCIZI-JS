class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try { 
      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }

     // throw an exception if amount is negative
    this.#amount += amount;
   
    } catch (err) {

     

    }
  }

  withdraw(amount) {

    try {
      if (amount < this.#amount) {
        throw new Error('Errore: Non puoi prelevare più di quanto possiedi!!');
      }




      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      console.log(`Stai prelevando ${amount} €`);
      this.#amount -= amount;
     
    } catch (err) {
    


    }

  }

  view() {
    console.log(`Il saldo attuale è di ${this.#amount}€`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();