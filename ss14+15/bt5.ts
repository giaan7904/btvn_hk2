class Transaction {
    constructor(public id: number, public type: string, public amount: number, public newBalance: number) {}
}

class Account {
    static accounts: Account[] = [];
    
    history: Transaction[] = [];

    constructor(public accountNumber: string, public balance: number) {
        Account.accounts.push(this);
    }

    deposit(amount: number): void {
        this.balance += amount;
        const transaction = new Transaction(this.history.length + 1, "deposit", amount, this.balance);
        this.history.push(transaction);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = new Transaction(this.history.length + 1, "withdraw", amount, this.balance);
            this.history.push(transaction);
        } else {
            console.log("Insufficient funds.");
        }
    }

    transfer(amount: number, destinationAccount: Account): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            destinationAccount.balance += amount;
            const transaction = new Transaction(this.history.length + 1, "transfer", amount, this.balance);
            this.history.push(transaction);
            const destinationTransaction = new Transaction(destinationAccount.history.length + 1, "transfer", amount, destinationAccount.balance);
            destinationAccount.history.push(destinationTransaction);
        } else {
            console.log("Insufficient funds.");
        }
    }

    showHistory(): void {
        console.log(`Transaction history for account ${this.accountNumber}:`);
        this.history.forEach(transaction => {
            console.log(`ID: ${transaction.id}, Type: ${transaction.type}, Amount: ${transaction.amount}, New Balance: ${transaction.newBalance}`);
        });
    }
}

// Example usage:
const account1 = new Account("123456", 1000);
const account2 = new Account("789012", 500);

account1.deposit(200);
account1.withdraw(300);
account1.transfer(400, account2);

account1.showHistory();
account2.showHistory();
