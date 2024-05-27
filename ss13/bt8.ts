class Classroom {
    private students: string[];

    constructor(students: string[]) {
        this.students = students;
    }

    // Phương thức thêm học sinh vào lớp
    addStudent(student: string): void {
        this.students.push(student);
    }

    // Phương thức xóa học sinh ra khỏi lớp và thêm vào danh sách tất cả học sinh
    removeStudent(student: string, allStudents: string[]): void {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
            allStudents.push(student);
        }
    }

    // Phương thức chỉnh sửa thông tin học sinh
    editStudent(oldStudent: string, newStudent: string): void {
        const index = this.students.indexOf(oldStudent);
        if (index !== -1) {
            this.students[index] = newStudent;
        }
    }

    // Phương thức hiển thị thông tin học sinh trong lớp
    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(student => {
            console.log(student);
        });
    }
}

// Khởi tạo đối tượng Classroom và danh sách tất cả học sinh
const studentsInClassroom = ["Alice", "Bob", "Charlie"];
const allStudents = ["David", "Eva", "Frank"];

const classroom = new Classroom(studentsInClassroom);

console.log("Trước khi thay đổi:");
classroom.showStudents(); // Hiển thị danh sách học sinh trước khi thay đổi

classroom.removeStudent("Bob", allStudents); // Xóa học sinh Bob khỏi lớp và thêm vào danh sách tất cả học sinh
classroom.editStudent("Alice", "Alex"); // Sửa thông tin học sinh Alice thành Alex

console.log("\nSau khi thay đổi:");
classroom.showStudents(); // Hiển thị danh sách học sinh sau khi thay đổi
