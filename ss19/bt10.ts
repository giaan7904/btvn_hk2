// Decorator cho trường bắt buộc
function Required(target: any, propertyKey: string) {
    let value: any;

    const getter = function() {
        return value;
    };

    const setter = function(newVal: any) {
        if (newVal == null || newVal === "") {
            throw new Error(`${propertyKey} is required`);
        }
        value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

// Decorator cho hàm validate form
function ValidateForm(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // Lấy danh sách các trường bắt buộc từ prototype của target
        const requiredFields = Object.getOwnPropertyNames(target.prototype).filter(prop => {
            const isStringType = Reflect.getMetadata("design:type", target.prototype, prop) === String;
            const isRequired = Reflect.hasMetadata("custom:required", target.prototype, prop);
            return isStringType && isRequired;
        });

        // Kiểm tra xem các trường bắt buộc có được điền đầy đủ không
        for (const field of requiredFields) {
            if (!this[field]) {
                throw new Error(`${field} is required`);
            }
        }

        // Gọi hàm gốc nếu form hợp lệ
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Sử dụng các decorators
class MyForm {
    @Required
    @Reflect.metadata("custom:required", true)
    firstName: string;

    @Required
    @Reflect.metadata("custom:required", true)
    lastName: string;

    @ValidateForm
    submitForm(): void {
        console.log("Form submitted successfully");
    }
}

// Sử dụng
const form = new MyForm();
form.firstName = "John";
form.lastName = ""; // Nếu comment dòng này, lỗi "lastName is required" sẽ được ném ra
form.submitForm(); // Nếu các trường được điền đầy đủ, "Form submitted successfully" sẽ được in ra
