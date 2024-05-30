"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm property decorator
function TheoDoiPass(sokytumin, sokytumax) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length < sokytumin || newVal.length > sokytumax) {
                throw new Error(`Password length must be between ${sokytumin} and ${sokytumax} characters`);
            }
            value = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
// Class User
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    TheoDoiPass(6, 12)
], User.prototype, "password", void 0);
// Sử dụng class User
const user = new User("username", "123456");
console.log(user.password); // 123456
// Lỗi: Password length must be between 6 and 12 characters
// const user2 = new User("username", "123"); 
