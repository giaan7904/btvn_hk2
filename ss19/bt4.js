"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm class decorator
function ThemThuocTinh(soluotmua, ngaysx) {
    return function (target) {
        target.prototype.soluotmua = soluotmua;
        target.prototype.ngaysx = ngaysx;
    };
}
// Class XeOTo
let XeOTo = class XeOTo {
    constructor(tenxe, giaxe, mauxe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
};
XeOTo = __decorate([
    ThemThuocTinh(100, "01/01/2022")
], XeOTo);
// Sử dụng class XeOTo
const xe = new XeOTo("Vinfast", 500000000, MauXe.Trang);
console.log(xe.tenxe); // Vinfast
console.log(xe.giaxe); // 500000000
console.log(xe.mauxe); // Trang
console.log(xe.soluotmua); // 100
console.log(xe.ngaysx); // 01/01/2022
