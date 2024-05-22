"use strict";
class Students {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
students.push(new Students(1, 20, 'student1@example.com'));
students.push(new Students(2, 21, 'student2@example.com'));
students.push(new Students(3, 22, 'student3@example.com'));
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
