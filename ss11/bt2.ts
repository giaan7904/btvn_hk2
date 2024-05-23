class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`);
    }
}

class Manager extends Employee {
    constructor(name, age, position, department) {
        super(name, age, position);
        this.department = department;
    }

    printInfo() {
        super.printInfo();
        console.log(`Department: ${this.department}`);
    }
}

// Tạo một thực thể từ lớp Manager
const manager = new Manager('John Doe', 35, 'Manager', 'Sales');

// Gọi phương thức printInfo để in ra tất cả thông tin
manager.printInfo();
