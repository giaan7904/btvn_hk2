"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} enrolled in ${course.title}`);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
// Tạo các thực thể
const instructor = new Instructor(1, "An");
const student = new Student(101, "AnHeo");
const course = instructor.createCourse("JavaScript Basics");
const lesson1 = instructor.createLesson("Introduction to JavaScript");
const lesson2 = instructor.createLesson("Variables and Data Types");
course.lessons.push(lesson1, lesson2);
student.enroll(course);
