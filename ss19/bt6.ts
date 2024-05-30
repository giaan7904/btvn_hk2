// Hàm method decorator
function KiemTraDiem(min: number, max: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const diem = args[0];
            if (diem >= min && diem <= max) {
                console.log("Kết quả: Điểm nằm trong khoảng cho phép.");
            } else {
                console.log("Kết quả: Điểm không nằm trong khoảng cho phép.");
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Class SinhVienThi
class SinhVienThi {
    diem: number;

    constructor(diem: number) {
        this.diem = diem;
    }

    @KiemTraDiem(0, 10)
    hienketqua(): void {
        console.log("Hàm hiện kết quả được gọi.");
    }
}

// Sử dụng class SinhVienThi
const sv = new SinhVienThi(8);
sv.hienketqua(); // Kết quả: Điểm nằm trong khoảng cho phép.
