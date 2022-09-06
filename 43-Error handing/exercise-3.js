class BankAccount {
  amount = 0;

  constructor(initialAmount) {
    this.amount = initialAmount;
  }

  deposit(amount) {

    try {
      this.amount += amount;
      if (amount < 0) {
        throw new NegativeAmountError('you cant deposit a negative value')
      }
    }
    catch (err) {

      console.log(err);
    }
  }




  withdraw(amount) {

    try {
      this.amount -= amount;

      if (this.amount < amount) {
        throw new WithdrawNotPermittedError('You cannot withdraw more than account balance');
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  view() {
    console.log(this.amount);
  }
}

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}



class NegativeAmountError extends Error {

  constructor(message) {
    super(message);
    this.name = "negativAmount error";
  }
}

class WithdrawNotPermittedError extends Error {

  constructor(message) {
    super(message);
    this.name = "whitdrawNotPermitted error";



  }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(-200);
bankAccount.withdraw(10000);
bankAccount.view();




