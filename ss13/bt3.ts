abstract class Animal {
    abstract makeSound(): void; // Abstract method
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog();
const cat = new Cat();
dog.makeSound(); // Output: Woof woof!
cat.makeSound(); // Output: Meow!
