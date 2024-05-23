class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount <= availableBalance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        } else {
            console.log(`Withdrawal amount exceeds available balance and overdraft limit for account ${this.accountNumber}`);
        }
    }
}

// Tạo tài khoản từ lớp CheckingAccount
const checkingAccount = new CheckingAccount('CHK789012', 1000, 500); // Hạn mức overdraft là 500

// Rút quá số tiền trong tài khoản
checkingAccount.withdraw(1500); // Rút 1500, trong hạn mức

// Kiểm tra trường hợp vượt quá hạn mức cho phép
checkingAccount.withdraw(3000); // Rút 3000, vượt quá hạn mức
