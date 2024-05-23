class Person {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}

// Khởi tạo một đối tượng từ lớp Student
const student = new Student('An', 12345);

// Dùng phương thức displayInfo để in thông tin
student.displayInfo();
