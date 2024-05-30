"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Hàm method decorator
function KiemTraDiem(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const diem = args[0];
            if (diem >= min && diem <= max) {
                console.log("Kết quả: Điểm nằm trong khoảng cho phép.");
            }
            else {
                console.log("Kết quả: Điểm không nằm trong khoảng cho phép.");
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Class SinhVienThi
class SinhVienThi {
    constructor(diem) {
        this.diem = diem;
    }
    hienketqua() {
        console.log("Hàm hiện kết quả được gọi.");
    }
}
__decorate([
    KiemTraDiem(0, 10)
], SinhVienThi.prototype, "hienketqua", null);
// Sử dụng class SinhVienThi
const sv = new SinhVienThi(8);
sv.hienketqua(); // Kết quả: Điểm nằm trong khoảng cho phép.
