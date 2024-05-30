"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator
function UpperCaseResult(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);
        // Chuyển đổi kết quả thành viết hoa
        const upperCaseResult = result.toUpperCase();
        // Trả về kết quả đã được chuyển đổi
        return upperCaseResult;
    };
    return descriptor;
}
// Sử dụng decorator
class MyClass {
    myMethod() {
        return "hello";
    }
}
__decorate([
    UpperCaseResult
], MyClass.prototype, "myMethod", null);
// Kiểm tra kết quả
const instance = new MyClass();
const result = instance.myMethod(); // Kết quả là "HELLO"
console.log(result); // In ra "HELLO"
