// Hàm class decorator
function ThemThuocTinh(soluotmua: number, ngaysx: string) {
    return function(target: any) {
        target.prototype.soluotmua = soluotmua;
        target.prototype.ngaysx = ngaysx;
    };
}

// Class XeOTo
@ThemThuocTinh(100, "01/01/2022")
class XeOTo {
    tenxe: string;
    giaxe: number;
    mauxe: MauXe;

    constructor(tenxe: string, giaxe: number, mauxe: MauXe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
}

// Sử dụng class XeOTo
const xe = new XeOTo("Vinfast", 500000000, MauXe.Trang);
console.log(xe.tenxe); // Vinfast
console.log(xe.giaxe); // 500000000
console.log(xe.mauxe); // Trang
console.log(xe.soluotmua); // 100
console.log(xe.ngaysx); // 01/01/2022
