"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator để validate tham số truyền vào hàm
function validateParams(...validationFunctions) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        // Override hàm gốc
        descriptor.value = function (...args) {
            // Duyệt qua từng tham số
            for (let i = 0; i < args.length; i++) {
                const validationFunction = validationFunctions[i];
                // Nếu hàm validation tồn tại và trả về false, ném ra lỗi
                if (validationFunction && !validationFunction(args[i])) {
                    throw new Error(`Invalid argument at index ${i}`);
                }
            }
            // Thực thi hàm gốc với tham số đã được validate
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Hàm validation kiểm tra xem giá trị có phải là chuỗi không
function isString(value) {
    return typeof value === 'string';
}
// Hàm validation kiểm tra xem giá trị có phải là số không
function isNumber(value) {
    return typeof value === 'number';
}
class InputClass {
    // Sử dụng decorator để validate tham số truyền vào hàm
    myMethod(arg1, arg2) {
        console.log(`arg1: ${arg1}, arg2: ${arg2}`);
    }
}
__decorate([
    validateParams(isString, isNumber)
], InputClass.prototype, "myMethod", null);
const myClass = new MyClass();
myClass.myMethod('hello', 42); // Kết quả: arg1: hello, arg2: 42
myClass.myMethod('hello', 'world'); // Lỗi: Invalid argument at index 1
