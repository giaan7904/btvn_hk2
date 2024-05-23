class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getDescription(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    // Ghi đè phương thức getDescription để in thêm thông tin về thương hiệu
    getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

// Khởi tạo đối tượng từ lớp Electronics và in ra thông tin
const electronicDevice = new Electronics('Smartphone', 500, 'Samsung');
electronicDevice.getDescription();
