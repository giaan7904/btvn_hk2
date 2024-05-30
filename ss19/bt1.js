"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Student.allStudents.push(this);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
Student.allStudents = [];
class Classroom {
} // Hàm decorator factory
function logDecorator() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const functionName = propertyKey;
            const parameters = args.map(arg => JSON.stringify(arg)).join(', ');
            const result = originalMethod.apply(this, args);
            console.log(`Function ${functionName} called with parameters: ${parameters}. Result: ${result}`);
            return result;
        };
        return descriptor;
    };
}
// Sử dụng decorator factory
class MyClass {
    myMethod(param1, param2) {
        console.log("Inside myMethod");
        return param1 * 2;
    }
}
__decorate([
    logDecorator()
], MyClass.prototype, "myMethod", null);
const instance = new MyClass();
instance.myMethod(10, "hello"); // Kết quả trong console sẽ hiển thị thông tin về việc gọi hàm
students: Student[] = [];
addStudent(id, number);
void {
    const: index = Student.allStudents.findIndex(student => student.getId() === id),
    if(index) { }
} !== -1;
{
    const student = Student.allStudents.splice(index, 1)[0];
    this.students.push(student);
}
{
    console.log("Student not found.");
}
removeStudent(id, number);
void {
    const: index = this.students.findIndex(student => student.getId() === id),
    if(index) { }
} !== -1;
{
    const student = this.students.splice(index, 1)[0];
    Student.allStudents.push(student);
}
{
    console.log("Student not found in this classroom.");
}
editStudent(id, number, newName, string);
void {
    const: student = this.students.find(student => student.getId() === id),
    if(student) {
        student.name = newName;
    }, else: {
        console, : .log("Student not found in this classroom.")
    }
};
showStudents();
void {
    console, : .log("Students in this classroom:"),
    this: .students.forEach(student => {
        console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
    })
};
// Create 6 student entities
const student1 = new Student(1, "Alice");
const student2 = new Student(2, "Bob");
const student3 = new Student(3, "Charlie");
const student4 = new Student(4, "David");
const student5 = new Student(5, "Eve");
const student6 = new Student(6, "Frank");
// Create 2 classrooms and add students to them
const classroom1 = new Classroom();
classroom1.addStudent(1);
classroom1.addStudent(2);
classroom1.addStudent(3);
const classroom2 = new Classroom();
classroom2.addStudent(4);
classroom2.addStudent(5);
classroom2.addStudent(6);
// Test removeStudent and editStudent methods
classroom1.removeStudent(1);
classroom1.editStudent(2, "Bob Jr.");
classroom2.removeStudent(4);
classroom2.editStudent(5, "Eve Jr.");
// Show students in each classroom
classroom1.showStudents();
classroom2.showStudents();
