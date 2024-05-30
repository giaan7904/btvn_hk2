// Hàm decorator
function UpperCaseResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);

        // Chuyển đổi kết quả thành viết hoa
        const upperCaseResult = result.toUpperCase();

        // Trả về kết quả đã được chuyển đổi
        return upperCaseResult;
    };

    return descriptor;
}

// Sử dụng decorator
class MyClass {
    @UpperCaseResult
    myMethod(): string {
        return "hello";
    }
}

// Kiểm tra kết quả
const instance = new MyClass();
const result = instance.myMethod(); // Kết quả là "HELLO"
console.log(result); // In ra "HELLO"
