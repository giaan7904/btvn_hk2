"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    printInfo() {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
        console.log(`Area: ${this.getArea()}`);
    }
}
const myRectangle = new Rectangle(10, 5);
myRectangle.printInfo();
myRectangle.setWidth(15);
myRectangle.setHeight(8);
console.log('After updating dimensions:');
myRectangle.printInfo();
