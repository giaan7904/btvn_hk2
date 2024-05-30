"use strict";
function typeCheckDecorator(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let methodSignature = Reflect.getMetadata("design:paramtypes", target, propertyKey);
        for (let i = 0; i < args.length; i++) {
            if (args[i] == null || typeof args[i] !== methodSignature[i].name.toLowerCase()) {
                throw new Error(`Argument type error: expected ${methodSignature[i].name.toLowerCase()} but received ${typeof args[i]}`);
            }
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class MyClass {
    add(a, b) {
        return a + b;
    }
}
MyClass.prototype.add = typeCheckDecorator(MyClass.prototype, 'add', Object.getOwnPropertyDescriptor(MyClass.prototype, 'add'));
let myObject = new MyClass();
console.log(myObject.add(5, 7)); // Output: 12
console.log(myObject.add(5, "hello")); // Throws Error: Argument type error: expected number but received string
