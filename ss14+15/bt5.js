"use strict";
class Transaction {
    constructor(id, type, amount, newBalance) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        Account.accounts.push(this);
    }
    deposit(amount) {
        this.balance += amount;
        const transaction = new Transaction(this.history.length + 1, "deposit", amount, this.balance);
        this.history.push(transaction);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = new Transaction(this.history.length + 1, "withdraw", amount, this.balance);
            this.history.push(transaction);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    transfer(amount, destinationAccount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            destinationAccount.balance += amount;
            const transaction = new Transaction(this.history.length + 1, "transfer", amount, this.balance);
            this.history.push(transaction);
            const destinationTransaction = new Transaction(destinationAccount.history.length + 1, "transfer", amount, destinationAccount.balance);
            destinationAccount.history.push(destinationTransaction);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    showHistory() {
        console.log(`Transaction history for account ${this.accountNumber}:`);
        this.history.forEach(transaction => {
            console.log(`ID: ${transaction.id}, Type: ${transaction.type}, Amount: ${transaction.amount}, New Balance: ${transaction.newBalance}`);
        });
    }
}
Account.accounts = [];
// Example usage:
const account1 = new Account("123456", 1000);
const account2 = new Account("789012", 500);
account1.deposit(200);
account1.withdraw(300);
account1.transfer(400, account2);
account1.showHistory();
account2.showHistory();
