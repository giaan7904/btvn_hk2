"use strict";
class Shape {
    calculateArea(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            // Tính diện tích hình chữ nhật
            return arg1 * arg2;
        }
        else if (arg1 !== undefined) {
            // Tính diện tích hình tròn
            return Math.PI * arg1 * arg1;
        }
        else {
            return 0;
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
// Tạo thực thể từ lớp Rectangle và tính diện tích
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.calculateArea());
// Tạo thực thể từ lớp Circle và tính diện tích
const circle = new Circle(7);
console.log("Circle Area:", circle.calculateArea());
