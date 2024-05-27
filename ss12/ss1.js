"use strict";
// Abstract class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Phương thức printName
    printName() {
        console.log(`Tên của đối tượng là: ${this.name}`);
    }
}
// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // Phương thức makeNoise của lớp Cat
    makeNoise() {
        console.log("Meo meo");
    }
}
// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    // Phương thức makeNoise của lớp Dog
    makeNoise() {
        console.log("Gâu gâu");
    }
}
// Tạo ra 2 đối tượng từ 2 lớp đã định nghĩa
const cat = new Cat("Meowth");
const dog = new Dog("Buddy");
// Gọi phương thức printName và makeNoise với mỗi đối tượng
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
