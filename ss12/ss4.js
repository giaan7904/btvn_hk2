"use strict";
// Lớp Product
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    // Phương thức printInfo để in thông tin sản phẩm
    printInfo() {
        console.log(`ID: ${this.id}, Tên sản phẩm: ${this.name}`);
    }
}
// Lớp Electronic kế thừa từ Product
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.name = name;
        this.id = id;
        this.brand = brand;
    }
    // Phương thức printInfo của Electronic
    printInfo() {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}
// Lớp Book kế thừa từ Product
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.name = name;
        this.id = id;
        this.author = author;
    }
    // Phương thức printInfo của Book
    printInfo() {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}
// Tạo thực thể từ lớp Electronic và gọi phương thức printInfo
const electronic = new Electronic("Smartphone", 1, "Samsung");
electronic.printInfo();
// Tạo thực thể từ lớp Book và gọi phương thức printInfo
const book = new Book("Harry Potter", 2, "J.K. Rowling");
book.printInfo();
