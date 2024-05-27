// Lớp Employee
class Employee {
    protected name: string;
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    // Phương thức tính lương
    calculateSalary(): number {
        // Mặc định trả về 0, phương thức này sẽ được ghi đè bởi các lớp con
        return 0;
    }
}

// Lớp internEmployee kế thừa từ Employee
class internEmployee extends Employee {
    private workHour: number;

    constructor(name: string, role: string, workHour: number) {
        super(name, role);
        this.workHour = workHour;
    }

    // Ghi đè phương thức calculateSalary
    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

// Lớp officialEmployee kế thừa từ Employee
class officialEmployee extends Employee {
    private overtimeWage: number;

    constructor(name: string, role: string, overtimeWage: number) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }

    // Ghi đè phương thức calculateSalary
    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

// Khởi tạo đối tượng từ lớp internEmployee và tính lương
const intern = new internEmployee("Alice", "Intern", 40);
console.log("Lương của nhân viên thực tập là:", intern.calculateSalary()); // Output: 1200000

// Khởi tạo đối tượng từ lớp officialEmployee và tính lương
const official = new officialEmployee("Bob", "Official", 500000);
console.log("Lương của nhân viên chính thức là:", official.calculateSalary()); // Output: 20500000
