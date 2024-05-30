"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator cho trường bắt buộc
function Required(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        if (newVal == null || newVal === "") {
            throw new Error(`${propertyKey} is required`);
        }
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
// Decorator cho hàm validate form
function ValidateForm(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Lấy danh sách các trường bắt buộc từ prototype của target
        const requiredFields = Object.getOwnPropertyNames(target.prototype).filter(prop => {
            const isStringType = Reflect.getMetadata("design:type", target.prototype, prop) === String;
            const isRequired = Reflect.hasMetadata("custom:required", target.prototype, prop);
            return isStringType && isRequired;
        });
        // Kiểm tra xem các trường bắt buộc có được điền đầy đủ không
        for (const field of requiredFields) {
            if (!this[field]) {
                throw new Error(`${field} is required`);
            }
        }
        // Gọi hàm gốc nếu form hợp lệ
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// Sử dụng các decorators
class MyForm {
    submitForm() {
        console.log("Form submitted successfully");
    }
}
__decorate([
    Required,
    Reflect.metadata("custom:required", true)
], MyForm.prototype, "firstName", void 0);
__decorate([
    Required,
    Reflect.metadata("custom:required", true)
], MyForm.prototype, "lastName", void 0);
__decorate([
    ValidateForm
], MyForm.prototype, "submitForm", null);
// Sử dụng
const form = new MyForm();
form.firstName = "John";
form.lastName = ""; // Nếu comment dòng này, lỗi "lastName is required" sẽ được ném ra
form.submitForm(); // Nếu các trường được điền đầy đủ, "Form submitted successfully" sẽ được in ra
