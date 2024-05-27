"use strict";
// Lớp CheckingAccount kế thừa từ Account
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    // Ghi đè phương thức withdraw
    withdraw(amount) {
        const totalBalance = this.balance + this.overdraftLimit;
        if (amount <= totalBalance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount}`);
            console.log(`Rút tiền thành công. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Không đủ số dư để rút.");
        }
    }
}
// Tạo thực thể từ lớp CheckingAccount
const checkingAccount = new CheckingAccount("CA123456", 1000, 500);
// Nạp tiền vào tài khoản
checkingAccount.deposit(500);
// Rút tiền từ tài khoản
checkingAccount.withdraw(2000);
// In ra lịch sử giao dịch
checkingAccount.showHistory();
