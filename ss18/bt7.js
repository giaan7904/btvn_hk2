"use strict";
function middlewareDecorator(...middlewares) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Thực hiện các hàm middleware trước khi gọi hàm gốc
            for (let middleware of middlewares) {
                middleware.apply(this, args);
            }
            // Gọi hàm gốc
            let result = originalMethod.apply(this, args);
            // Thực hiện các hàm middleware sau khi gọi hàm gốc
            for (let middleware of middlewares) {
                middleware.apply(this, [result]);
            }
            return result;
        };
        return descriptor;
    };
}
class MyClass {
    add(a, b) {
        return a + b;
    }
}
MyClass.prototype.add = middlewareDecorator(function (a, b) { console.log(`Before: ${a}, ${b}`); }, function (result) { console.log(`After: ${result}`); })(MyClass.prototype, 'add', Object.getOwnPropertyDescriptor(MyClass.prototype, 'add'));
let myObject = new MyClass();
console.log(myObject.add(5, 7)); // Output: "Before: 5, 7", "After: 12", and then 12
