"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    // Ghi đè phương thức getDescription để in thêm thông tin về thương hiệu
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
// Khởi tạo đối tượng từ lớp Electronics và in ra thông tin
const electronicDevice = new Electronics('Smartphone', 500, 'Samsung');
electronicDevice.getDescription();
