"use strict";
// Lớp Account
class Account {
    constructor(accountNumber, initialBalance, status = "active") {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = status;
    }
    // Phương thức nạp tiền
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp tiền: +${amount}`);
            console.log(`Nạp tiền thành công. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }
    // Phương thức rút tiền
    withdraw(amount) {
        if (this.balance >= amount && this.balance - amount >= 0) {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount}`);
            console.log(`Rút tiền thành công. Số dư hiện tại: ${this.balance}`);
        }
        else {
            console.log("Không đủ số dư để rút hoặc rút vượt quá số dư hiện tại.");
        }
    }
    // Phương thức hiển thị lịch sử giao dịch
    showHistory() {
        console.log("Lịch sử giao dịch:");
        this.history.forEach(transaction => console.log(transaction));
    }
}
// Lớp SavingAccount kế thừa từ Account
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    // Ghi đè phương thức withdraw
    withdraw(amount) {
        if (this.balance >= amount && this.balance - amount >= 0) {
            super.withdraw(amount);
        }
        else {
            console.log("Không thể rút tiền. Số tiền rút vượt quá số dư hiện tại.");
        }
    }
}
// Tạo thực thể từ lớp SavingAccount
const savingAccount = new SavingAccount("SA123456", 1000, 0.05);
// Nạp tiền vào tài khoản
savingAccount.deposit(500);
// Rút tiền từ tài khoản
savingAccount.withdraw(200);
// In ra lịch sử giao dịch
savingAccount.showHistory();
