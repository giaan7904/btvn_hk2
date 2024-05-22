"use strict";
class Circle {
    constructor(BanKinh) {
        this.BanKinh = BanKinh;
    }
    getBanKinh() {
        return this.BanKinh;
    }
    setBanKinh(BanKinh) {
        this.BanKinh = BanKinh;
    }
    getChuVi() {
        return 2 * Math.PI * this.BanKinh;
    }
    getDienTich() {
        return Math.PI * Math.pow(this.BanKinh, 2);
    }
}
const myCircle = new Circle(5);
console.log(`Bán kính: ${myCircle.getBanKinh()}`);
console.log(`Chu vi: ${myCircle.getChuVi()}`);
console.log(`Diện tích: ${myCircle.getDienTich()}`);
myCircle.setBanKinh(10);
console.log(`Bán kính mới: ${myCircle.getBanKinh()}`);
console.log(`Chu vi mới: ${myCircle.getChuVi()}`);
console.log(`Diện tích mới: ${myCircle.getDienTich()}`);
