"use strict";
// Lớp Vehicle implements interface ChangeSpeed
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    // Phương thức tăng tốc độ
    speedUp() {
        this.speed += 10;
    }
    // Phương thức giảm tốc độ
    slowDown() {
        this.speed -= 10;
    }
    // Phương thức dừng lại
    stop() {
        this.speed = 0;
    }
    // Phương thức in thông tin tốc độ
    printSpeedInfo() {
        console.log(`Tốc độ hiện tại của xe là: ${this.speed} km/h`);
    }
}
// Tạo thực thể từ lớp Vehicle
const vehicle = new Vehicle(50);
// Gọi các phương thức để thay đổi tốc độ và in thông tin
vehicle.printSpeedInfo(); // In ra: Tốc độ hiện tại của xe là: 50 km/h
vehicle.speedUp();
vehicle.printSpeedInfo(); // In ra: Tốc độ hiện tại của xe là: 60 km/h
vehicle.slowDown();
vehicle.printSpeedInfo(); // In ra: Tốc độ hiện tại của xe là: 50 km/h
vehicle.stop();
vehicle.printSpeedInfo(); // In ra: Tốc độ hiện tại của xe là: 0 km/h
