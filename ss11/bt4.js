"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
// Tạo một thực thể từ lớp Bicycle
const bicycle = new Bicycle('Giant', 20, 1, 6);
// In thông tin ban đầu về tốc độ
bicycle.showSpeed();
// Tăng tốc độ
bicycle.speedUp(10);
bicycle.showSpeed();
// Giảm tốc độ
bicycle.slowDown(5);
bicycle.showSpeed();
