// Interface Geometry
interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Lớp Circle implements interface Geometry
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Phương thức tính diện tích của hình tròn
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    // Phương thức tính chu vi của hình tròn
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Lớp Rectangle implements interface Geometry
class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Phương thức tính diện tích của hình chữ nhật
    calculateArea(): number {
        return this.width * this.height;
    }

    // Phương thức tính chu vi của hình chữ nhật
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Example usage
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.calculateArea()); // Output: Diện tích hình tròn: 78.53981633974483
console.log("Chu vi hình tròn:", circle.calculatePerimeter()); // Output: Chu vi hình tròn: 31.41592653589793

const rectangle = new Rectangle(4, 6);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea()); // Output: Diện tích hình chữ nhật: 24
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter()); // Output: Chu vi hình chữ nhật: 20
