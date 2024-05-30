let cacheDecorator = (target, propertyKey, descriptor) => {
    let cache = {};
    let originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        let key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            let result = originalMethod.apply(this, args);
            cache[key] = result;
            return result;
        }
    }

    return descriptor;
}

class MyClass {
    add(a, b) {
        console.log("Calculating sum...");
        return a + b;
    }
}

MyClass.prototype.add = cacheDecorator(MyClass.prototype, 'add', Object.getOwnPropertyDescriptor(MyClass.prototype, 'add'));

let myObject = new MyClass();
console.log(myObject.add(2, 3));  // Output: "Calculating sum..." and then 5
console.log(myObject.add(2, 3));  // Output: 5 (no "Calculating sum..." because the result is cached)
