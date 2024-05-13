let accounts = [
    { userName: 'user1', password: 'pass1' },
    { userName: 'user2', password: 'pass 2' },
    { userName: 'user3', password: 'pass3' },
];
let invalidAccounts = accounts.filter(account => account.password.includes(' '));

if (invalidAccounts.length > 0) {
    invalidAccounts.forEach(account => {
        console.log(`Tài khoản: ${account.userName} có mật khẩu chứa dấu cách. Vị trí trong mảng: ${accounts.indexOf(account)}`);
    });
} else {
    console.log('Mọi tài khoản hợp lệ');
}
