// Hàm decorator factory
function parameterValidator(rules: ((param: any) => boolean)[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (args.length !== rules.length) {
                throw new Error("Number of parameters does not match the number of validation rules");
            }

            for (let i = 0; i < args.length; i++) {
                if (!rules[i](args[i])) {
                    throw new Error(`Parameter at position ${i} does not meet the validation criteria`);
                }
            }

            return originalMethod.apply(this, args);
        };

        // Return descriptor after modification
        return descriptor;
    };
}

// Hàm validation rules đơn giản để minh họa
function isNumber(param: any): boolean {
    return typeof param === 'number';
}

function isString(param: any): boolean {
    return typeof param === 'string';
}

// Sử dụng decorator factory
class MyClass {
    @parameterValidator([isNumber, isString])
    myMethod(param1: number, param2: string): void {
        console.log("Inside myMethod");
    }
}

const instance = new MyClass();
instance.myMethod(10, "hello"); // Sẽ chạy bình thường
// instance.myMethod("not a number", "hello"); // Sẽ gây ra lỗi vì tham số không đáp ứng các tiêu chí xác thực
// instance.myMethod(10); // Sẽ gây ra lỗi vì không đủ tham số
