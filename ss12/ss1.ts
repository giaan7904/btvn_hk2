// Abstract class Animal
abstract class Animal {
    constructor(public name: string) {}

    // Phương thức abstract makeNoise
    abstract makeNoise(): void;

    // Phương thức printName
    printName(): void {
        console.log(`Tên của đối tượng là: ${this.name}`);
    }
}

// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Phương thức makeNoise của lớp Cat
    makeNoise(): void {
        console.log("Meo meo");
    }
}

// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Phương thức makeNoise của lớp Dog
    makeNoise(): void {
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
