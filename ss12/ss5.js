"use strict";
// Lớp abstract Quadrangle
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
// Lớp Rectangle kế thừa từ Quadrangle
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    // Triển khai phương thức calculatePerimeter của Rectangle
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Lớp Square kế thừa từ Quadrangle
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    // Triển khai phương thức calculatePerimeter của Square
    calculatePerimeter() {
        return 4 * this.width;
    }
}
// Tạo thực thể từ lớp Rectangle và gọi phương thức calculatePerimeter
const rectangle = new Rectangle(4, 6);
console.log("Chu vi của hình chữ nhật là:", rectangle.calculatePerimeter()); // Output: 20
// Tạo thực thể từ lớp Square và gọi phương thức calculatePerimeter
const square = new Square(5);
console.log("Chu vi của hình vuông là:", square.calculatePerimeter()); // Output: 20
