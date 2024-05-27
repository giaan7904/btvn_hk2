// Abstract class Person
abstract class Person {
    constructor(public name: string) {}

    // Phương thức abstract displayInfo
    abstract displayInfo(): void;
}

// Lớp Student kế thừa từ Person
class Student extends Person {
    constructor(public name: string, public id: number) {
        super(name);
    }

    // Triển khai phương thức displayInfo của Student
    displayInfo(): void {
        console.log(`ID: ${this.id}, Tên sinh viên: ${this.name}`);
    }
}

// Lớp Teacher kế thừa từ Person
class Teacher extends Person {
    constructor(public name: string, public subject: string) {
        super(name);
    }

    // Triển khai phương thức displayInfo của Teacher
    displayInfo(): void {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}

// Khởi tạo đối tượng từ lớp Student và sử dụng displayInfo
const student = new Student("Alice", 123);
student.displayInfo(); // Output: ID: 123, Tên sinh viên: Alice

// Khởi tạo đối tượng từ lớp Teacher và sử dụng displayInfo
const teacher = new Teacher("Mr. Smith", "Math");
teacher.displayInfo(); // Output: Tên giáo viên: Mr. Smith, Môn học: Math
