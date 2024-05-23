"use strict";
class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name}: ${this.speed} km/h`);
    }
}
class Car extends Vehicle {
    accelerate(amount) {
        // Có thể truy cập thuộc tính protected từ lớp con
        this.speed += amount;
    }
}
const car = new Car('Toyota', 60);
// Không thể truy cập thuộc tính private từ bên ngoài lớp
// car.speed = 80; // Error: Property 'speed' is private
// Nhưng có thể truy cập từ phương thức public của lớp con
car.accelerate(20);
// car.showSpeed(); // Error: Property 'showSpeed' is protected
