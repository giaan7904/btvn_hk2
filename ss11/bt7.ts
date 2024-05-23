class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        const monthlyInterest = this.balance * (this.interestRate / 100) / 12;
        return monthlyInterest;
    }
}

// Tạo ra tài khoản từ lớp SavingAccount
const savingsAccount = new SavingsAccount('SAV123456', 1000, 5); // Lãi suất 5% mỗi năm

// Tính tiền lãi hàng tháng trong tài khoản
const monthlyInterest = savingsAccount.calculateInterest();
console.log(`Monthly interest: ${monthlyInterest}`);

// Gửi thêm tiền vào tài khoản
savingsAccount.deposit(500);

// In lại tiền lãi hàng tháng sau khi gửi thêm tiền
const newMonthlyInterest = savingsAccount.calculateInterest();
console.log(`Updated monthly interest: ${newMonthlyInterest}`);
