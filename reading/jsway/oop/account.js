class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(amount) {
    this.balance += amount;
  }
  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

const accountList = [];
accountList.push(new Account('Sean'));
accountList.push(new Account('Brad'));
accountList.push(new Account('Georges'));

accountList.forEach((account) => {
  account.credit(1000);
  console.log(account.describe());
});
