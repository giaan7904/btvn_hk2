"use strict";
// Lớp trừu tượng Shape
class Shape {
    constructor(name) {
        this.name = name;
    }
    // Phương thức lấy tên hình
    getName() {
        return this.name;
    }
    // Phương thức trừu tượng lấy kích thước
    getSize() {
        throw new Error("Phương thức trừu tượng getSize phải được triển khai");
    }
}
// Lớp Rectangle kế thừa từ Shape
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Triển khai phương thức getSize để trả về kích thước của hình chữ nhật
    getSize() {
        return `Chiều rộng: ${this.width}, Chiều cao: ${this.height}`;
    }
    // Ghi đè phương thức getName để lấy tên của hình
    getName() {
        return super.getName();
    }
}
// Ví dụ sử dụng
const rectangle = new Rectangle("Hình chữ nhật", 10, 5);
console.log(rectangle.getName()); // Output: Hình chữ nhật
console.log(rectangle.getSize()); // Output: Chiều rộng: 10, Chiều cao: 5
