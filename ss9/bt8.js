"use strict";
function tinhTongTien(item) {
    const [ten, gia, soLuong] = item;
    const tongTien = gia * soLuong;
    return tongTien;
}
const matHang = ["Bút bi", 5000, 10];
const tongTien = tinhTongTien(matHang);
console.log("Tổng tiền:", tongTien, "đồng");
