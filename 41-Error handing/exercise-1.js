class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {
      // throw an exception if amount is negative
      this.#amount += amount;
      console.log(`Stai depositando ${amount} €`);
      throw new SyntaxError;
    } catch (err) {

      if (amount < 0) {
        console.log("Errore: il valore di deposito non può essere negativo!!")

      }

    }
  }

  withdraw(amount) {

    try {
      // throw an exception if amount is negative or if withdrawal amount is greater than current amount
      console.log(`Stai prelevando ${amount} €`);
      this.#amount -= amount;
      throw new SyntaxError;
    } catch (err) {
      if (amount > this.#amount) {
        console.log("Errore: Non puoi prelevare più di quanto possiedi!!")
      }


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