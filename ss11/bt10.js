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
    calculatePerimeter(arg1, arg2) {
        if (arg1 !== undefined && arg2 !== undefined) {
            // Tính chu vi hình chữ nhật
            return 2 * (arg1 + arg2);
        }
        else if (arg1 !== undefined) {
            // Tính chu vi hình tròn
            return 2 * Math.PI * arg1;
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
// Tạo thực thể từ lớp Rectangle và tính chu vi
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());
// Tạo thực thể từ lớp Circle và tính chu vi
const circle = new Circle(7);
console.log("Circle Perimeter:", circle.calculatePerimeter());
