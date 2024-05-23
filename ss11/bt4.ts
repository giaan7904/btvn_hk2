class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    protected slowDown(amount: number): void {
        this.speed -= amount;
    }

    protected speedUp(amount: number): void {
        this.speed += amount;
    }

    protected showSpeed(): void {
        console.log(`Current speed of ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
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
