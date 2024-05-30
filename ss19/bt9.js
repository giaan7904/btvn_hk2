"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Enum định nghĩa các quyền truy cập
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["ADMIN"] = "admin";
})(UserRole || (UserRole = {}));
// Hàm decorator chứng thực
function Authenticated(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // Giả định: Kiểm tra xem người dùng đã được chứng thực hay chưa
        const isAuthenticated = true; // Đây chỉ là giả định, bạn cần cài đặt kiểm tra thực tế
        if (!isAuthenticated) {
            throw new Error("User is not authenticated");
        }
        // Gọi hàm gốc nếu người dùng đã được chứng thực
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// Hàm decorator kiểm tra quyền truy cập
function AccessRole(role) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // Giả định: Kiểm tra quyền truy cập của người dùng
            const userRole = UserRole.USER; // Đây chỉ là giả định, bạn cần cài đặt kiểm tra thực tế
            if (userRole !== role) {
                throw new Error("Access denied: Insufficient role");
            }
            // Gọi hàm gốc nếu người dùng có quyền truy cập đủ
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Sử dụng decorator
class Example {
    exampleMethod() {
        console.log("Access granted");
    }
}
__decorate([
    Authenticated,
    AccessRole(UserRole.ADMIN)
], Example.prototype, "exampleMethod", null);
// Kiểm tra kết quả
const exampleInstance = new Example();
exampleInstance.exampleMethod(); // Nếu người dùng đã được chứng thực và có quyền ADMIN, "Access granted" sẽ được in ra
