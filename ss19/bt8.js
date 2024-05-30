"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator chuyển đổi input thành viết hoa
function ToUpperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Chuyển đổi input thành viết hoa
        const upperCaseArgs = args.map(arg => arg.toUpperCase());
        // Gọi hàm gốc với input đã chuyển đổi
        return originalMethod.apply(this, upperCaseArgs);
    };
    return descriptor;
}
// Hàm decorator đảo ngược chuỗi output
function ReverseOutput(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Gọi hàm gốc và lấy output
        const result = originalMethod.apply(this, args);
        // Đảo ngược chuỗi output
        const reversedResult = result.split('').reverse().join('');
        return reversedResult;
    };
    return descriptor;
}
// Hàm decorator thêm prefix
function AddPrefix(prefix) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Gọi hàm gốc và lấy output
            const result = originalMethod.apply(this, args);
            // Thêm prefix vào output
            const resultWithPrefix = prefix + result;
            return resultWithPrefix;
        };
        return descriptor;
    };
}
// Hàm decorator composition
function DecoratorComposition(...decorators) {
    return function (target, propertyKey, descriptor) {
        for (const decorator of decorators.reverse()) {
            descriptor = decorator(target, propertyKey, descriptor);
        }
        return descriptor;
    };
}
// Sử dụng decorator composition
class Example {
    exampleMethod(input) {
        return input;
    }
}
__decorate([
    DecoratorComposition(ToUpperCase, ReverseOutput, AddPrefix("Prefix: "))
], Example.prototype, "exampleMethod", null);
// Kiểm tra kết quả
const exampleInstance = new Example();
const result = exampleInstance.exampleMethod("hello world");
console.log(result); // In ra: ":dlrow olleh"
