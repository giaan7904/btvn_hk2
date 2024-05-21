type ItemInfo = [string, number, number]; 

function tinhTongTien(item: ItemInfo): number {
    const [ten, gia, soLuong] = item;
    const tongTien = gia * soLuong;
    return tongTien;
}

const matHang: ItemInfo = ["Bút bi", 5000, 10]; 
const tongTien = tinhTongTien(matHang);
console.log("Tổng tiền:", tongTien, "đồng");
