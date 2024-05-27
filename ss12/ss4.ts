// Lớp Product
class Product {
    constructor(public name: string, public id: number) {}

    // Phương thức printInfo để in thông tin sản phẩm
    printInfo(): void {
        console.log(`ID: ${this.id}, Tên sản phẩm: ${this.name}`);
    }
}

// Lớp Electronic kế thừa từ Product
class Electronic extends Product {
    constructor(public name: string, public id: number, public brand: string) {
        super(name, id);
    }

    // Phương thức printInfo của Electronic
    printInfo(): void {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}

// Lớp Book kế thừa từ Product
class Book extends Product {
    constructor(public name: string, public id: number, public author: string) {
        super(name, id);
    }

    // Phương thức printInfo của Book
    printInfo(): void {
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
