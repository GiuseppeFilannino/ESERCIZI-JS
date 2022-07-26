class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {

    try {
      this.#amount += amount;

      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }
    }
    catch (err) {

      console.log(err)
    }

  }

  withdraw(amount) {
    try {
      this.#amount -= amount;

      if (amount < 0) {

        throw new Error('You cannot withdraw a negative import')
      }
      else if (this.#amount < amount) {

        throw Error('You cannot withdraw more than account balance')

      }
    }

    catch (err) {
      console.log(err)


    }


  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(10000);
bankAccount.view();


console.log(`Verifica crash dell'app`)