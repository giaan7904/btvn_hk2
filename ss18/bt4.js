"use strict";
// Hàm để validate tham số truyền vào hàm
function validate(validationFunction) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        // Thay thế hàm gốc bằng hàm mới
        descriptor.value = function (...args) {
            // Duyệt qua tất cả tham số
            for (let arg of args) {
                // Nếu hàm validation trả về false, trả về lỗi
                if (!validationFunction(arg)) {
                    throw new Error(`Invalid argument: ${arg}`);
                }
            }
            // Nếu tất cả tham số đều hợp lệ, thực thi hàm gốc
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Hàm validation kiểm tra xem tham số có phải là số không
function isNumber(arg) {
    return typeof arg === 'number';
}
class MyClass {
    add(a, b) {
        return a + b;
    }
}
// Áp dụng hàm validate
Object.defineProperty(MyClass.prototype, 'add', validate(isNumber)(MyClass.prototype, 'add', Object.getOwnPropertyDescriptor(MyClass.prototype, 'add')));
let myObject = new MyClass();
console.log(myObject.add(5, 7)); // Output: 12
console.log(myObject.add(5, "hello")); // Throws Error: Invalid argument: hello
