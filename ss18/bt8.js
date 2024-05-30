"use strict";
function cacheWithConditionDecorator(condition) {
    let cache = {};
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let key = JSON.stringify(args);
            if (cache[key] !== undefined && condition(cache[key])) {
                return cache[key];
            }
            else {
                let result = originalMethod.apply(this, args);
                cache[key] = result;
                return result;
            }
        };
        return descriptor;
    };
}
class MyClass {
    subtract(a, b) {
        return a - b;
    }
}
MyClass.prototype.subtract = cacheWithConditionDecorator((result) => result > 0)(MyClass.prototype, 'subtract', Object.getOwnPropertyDescriptor(MyClass.prototype, 'subtract'));
let myObject = new MyClass();
console.log(myObject.subtract(10, 5)); // Output: 5 (tính toán và caching kết quả)
console.log(myObject.subtract(10, 5)); // Output: 5 (lấy kết quả từ bộ nhớ cache)
console.log(myObject.subtract(5, 10)); // Output: -5 (tính toán lại vì kết quả không thỏa mãn điều kiện)
