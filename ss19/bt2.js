"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm decorator factory
function parameterValidator(rules) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (args.length !== rules.length) {
                throw new Error("Number of parameters does not match the number of validation rules");
            }
            for (let i = 0; i < args.length; i++) {
                if (!rules[i](args[i])) {
                    throw new Error(`Parameter at position ${i} does not meet the validation criteria`);
                }
            }
            return originalMethod.apply(this, args);
        };
        // Return descriptor after modification
        return descriptor;
    };
}
// Hàm validation rules đơn giản để minh họa
function isNumber(param) {
    return typeof param === 'number';
}
function isString(param) {
    return typeof param === 'string';
}
// Sử dụng decorator factory
class MyClass {
    myMethod(param1, param2) {
        console.log("Inside myMethod");
    }
}
__decorate([
    parameterValidator([isNumber, isString])
], MyClass.prototype, "myMethod", null);
const instance = new MyClass();
instance.myMethod(10, "hello"); // Sẽ chạy bình thường
// instance.myMethod("not a number", "hello"); // Sẽ gây ra lỗi vì tham số không đáp ứng các tiêu chí xác thực
// instance.myMethod(10); // Sẽ gây ra lỗi vì không đủ tham số
