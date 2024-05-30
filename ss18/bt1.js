"use strict";
let logInfo = (target, propertyKey, descriptor) => {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Called function: ${propertyKey}`);
        console.log(`With arguments: ${JSON.stringify(args)}`);
        let result = originalMethod.apply(this, args);
        console.log(`Function returned: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
};
class MyClass {
    myMethod(a, b) {
        return a + b;
    }
}
MyClass.prototype.myMethod = logInfo(MyClass.prototype, 'myMethod', Object.getOwnPropertyDescriptor(MyClass.prototype, 'myMethod'));
let myObject = new MyClass();
myObject.myMethod(5, 7);
