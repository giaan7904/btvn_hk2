// Định nghĩa kiểu cho hàm validation
interface ValidationFunction {
    (value: any): boolean;
}

// Hàm decorator để validate tham số truyền vào hàm
function validateParams(...validationFunctions: ValidationFunction[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        // Override hàm gốc
        descriptor.value = function (...args: any[]) {
            // Duyệt qua từng tham số
            for (let i = 0; i < args.length; i++) {
                const validationFunction = validationFunctions[i];
                // Nếu hàm validation tồn tại và trả về false, ném ra lỗi
                if (validationFunction && !validationFunction(args[i])) {
                    throw new Error(`Invalid argument at index ${i}`);
                }
            }

            // Thực thi hàm gốc với tham số đã được validate
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Hàm validation kiểm tra xem giá trị có phải là chuỗi không
function isString(value: any): boolean {
    return typeof value === 'string';
}

// Hàm validation kiểm tra xem giá trị có phải là số không
function isNumber(value: any): boolean {
    return typeof value === 'number';
}

class InputClass {
    // Sử dụng decorator để validate tham số truyền vào hàm
    @validateParams(isString, isNumber)
    myMethod(arg1: string, arg2: number): void {
        console.log(`arg1: ${arg1}, arg2: ${arg2}`);
    }
}

const myClass = new MyClass();
myClass.myMethod('hello', 42); // Kết quả: arg1: hello, arg2: 42
myClass.myMethod('hello', 'world'); // Lỗi: Invalid argument at index 1