// Lớp Account
class Account {
    protected id: number;
    protected userName: string;
    protected password: string;
    protected isLogin: boolean;
    protected role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    // Phương thức login
    login(): void {
        if (!this.isLogin) {
            console.log(`Đăng nhập thành công với tài khoản ${this.userName}`);
            this.isLogin = true;
        } else {
            console.log("Bạn đã đăng nhập trước đó.");
        }
    }

    // Phương thức logout
    logout(): void {
        if (this.isLogin) {
            console.log(`Đăng xuất thành công khỏi tài khoản ${this.userName}`);
            this.isLogin = false;
        } else {
            console.log("Bạn chưa đăng nhập.");
        }
    }
}

// Lớp userAcc kế thừa từ Account
class userAcc extends Account {
    private status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    // Ghi đè phương thức login
    login(): void {
        if (this.status === "active") {
            super.login();
        } else if (this.status === "banned") {
            console.log("Tài khoản của bạn đã bị khóa.");
        }
    }
}

// Khởi tạo đối tượng từ lớp userAcc và thực hiện đăng nhập
const user = new userAcc(1, "user123", "password123", "user", "active");
user.login(); // Output: Đăng nhập thành công với tài khoản user123

// Thực hiện đăng xuất
user.logout(); // Output: Đăng xuất thành công khỏi tài khoản user123
