// Hàm decorator chuyển đổi input thành viết hoa
function ToUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // Chuyển đổi input thành viết hoa
        const upperCaseArgs = args.map(arg => arg.toUpperCase());

        // Gọi hàm gốc với input đã chuyển đổi
        return originalMethod.apply(this, upperCaseArgs);
    };

    return descriptor;
}

// Hàm decorator đảo ngược chuỗi output
function ReverseOutput(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // Gọi hàm gốc và lấy output
        const result = originalMethod.apply(this, args);

        // Đảo ngược chuỗi output
        const reversedResult = result.split('').reverse().join('');

        return reversedResult;
    };

    return descriptor;
}

// Hàm decorator thêm prefix
function AddPrefix(prefix: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // Gọi hàm gốc và lấy output
            const result = originalMethod.apply(this, args);

            // Thêm prefix vào output
            const resultWithPrefix = prefix + result;

            return resultWithPrefix;
        };

        return descriptor;
    };
}

// Hàm decorator composition
function DecoratorComposition(...decorators: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        for (const decorator of decorators.reverse()) {
            descriptor = decorator(target, propertyKey, descriptor);
        }
        return descriptor;
    };
}

// Sử dụng decorator composition
class Example {
    @DecoratorComposition(ToUpperCase, ReverseOutput, AddPrefix("Prefix: "))
    exampleMethod(input: string): string {
        return input;
    }
}

// Kiểm tra kết quả
const exampleInstance = new Example();
const result = exampleInstance.exampleMethod("hello world");
console.log(result); // In ra: ":dlrow olleh"
