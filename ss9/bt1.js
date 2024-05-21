"use strict";
function getShippingCost(quocGia) {
    switch (quocGia) {
        case "VN":
            return 10000;
        case "US":
            return 20000;
        case "UK":
            return 30000;
        default:
            throw new Error("Mã quốc gia không hợp lệ");
    }
}
const phiVanChuyenVN = getShippingCost("VN");
console.log("Phí vận chuyển đến Việt Nam:", phiVanChuyenVN);
const phiVanChuyenUS = getShippingCost("US");
console.log("Phí vận chuyển đến Mỹ:", phiVanChuyenUS);
const phiVanChuyenUK = getShippingCost("UK");
console.log("Phí vận chuyển đến Anh:", phiVanChuyenUK);
