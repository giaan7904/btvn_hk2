"use strict";
let timingDecorator = (target, propertyKey, descriptor) => {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Called function: ${propertyKey}`);
        console.log(`With arguments: ${JSON.stringify(args)}`);
        let start = performance.now();
        let result = originalMethod.apply(this, args);
        let end = performance.now();
        console.log(`Function returned: ${JSON.stringify(result)}`);
        console.log(`Execution time: ${end - start} milliseconds`);
        return result;
    };
    return descriptor;
};
class MyClass {
    myMethod(a, b) {
        return a + b;
    }
}
MyClass.prototype.myMethod = timingDecorator(MyClass.prototype, 'myMethod', Object.getOwnPropertyDescriptor(MyClass.prototype, 'myMethod'));
let myObject = new MyClass();
myObject.myMethod(5, 7);
