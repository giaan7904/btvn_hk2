// Lớp adminAcc kế thừa từ Account
class adminAcc extends Account {
    constructor(id: number, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }

    // Phương thức banUser
    banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Tài khoản ${user.userName} đã bị khóa.`);
    }
}

// Khởi tạo đối tượng từ lớp adminAcc
const admin = new adminAcc(2, "admin123", "adminpassword", "admin");

// Tạo đối tượng user từ lớp userAcc
const user = new userAcc(1, "user123", "password123", "user", "active");

// Gọi phương thức banUser từ lớp adminAcc để khóa tài khoản user
admin.banUser(user); // Output: Tài khoản user123 đã bị khóa.
