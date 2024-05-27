"use strict";
class Student {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
class Classroom {
    constructor() {
        this._students = [];
    }
    addStudent(student) {
        this._students.push(student);
    }
    showStudents() {
        this._students.forEach(student => {
            console.log(`ID Học sinh: ${student.id}, Tên: ${student.name}`);
        });
    }
    addStudentsFromArray(students) {
        this._students.push(...students);
    }
    removeStudent(id) {
        const index = this._students.findIndex(student => student.id === id);
        if (index !== -1) {
            this._students.splice(index, 1);
        }
    }
    moveStudentToClassroom(id, targetClassroom) {
        const index = this._students.findIndex(student => student.id === id);
        if (index !== -1) {
            const student = this._students[index];
            this.removeStudent(id);
            targetClassroom.addStudent(student);
        }
    }
}
// Ví dụ sử dụng:
const allStudents = [
    new Student(1, "An"),
    new Student(2, "Huy"),
    new Student(3, "Duy")
];
const lopA = new Classroom();
const lopB = new Classroom();
lopA.addStudentsFromArray(allStudents);
console.log("Lớp A:");
lopA.showStudents(); // Hiển thị tất cả học sinh trong lớp A
lopA.moveStudentToClassroom(1, lopB); // Di chuyển AN sang lớp B
console.log("\nLớp A sau khi di chuyển An sang Lớp B:");
lopA.showStudents(); // Hiển thị danh sách học sinh còn lại trong lớp A
console.log("\nLớp B:");
lopB.showStudents(); // Hiển thị tất cả học sinh trong lớp B
