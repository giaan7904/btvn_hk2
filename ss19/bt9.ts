// Enum định nghĩa các quyền truy cập
enum UserRole {
    USER = "user",
    ADMIN = "admin"
}

// Hàm decorator chứng thực
function Authenticated(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // Giả định: Kiểm tra xem người dùng đã được chứng thực hay chưa
        const isAuthenticated = true; // Đây chỉ là giả định, bạn cần cài đặt kiểm tra thực tế

        if (!isAuthenticated) {
            throw new Error("User is not authenticated");
        }

        // Gọi hàm gốc nếu người dùng đã được chứng thực
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Hàm decorator kiểm tra quyền truy cập
function AccessRole(role: UserRole) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // Giả định: Kiểm tra quyền truy cập của người dùng
            const userRole = UserRole.USER; // Đây chỉ là giả định, bạn cần cài đặt kiểm tra thực tế

            if (userRole !== role) {
                throw new Error("Access denied: Insufficient role");
            }

            // Gọi hàm gốc nếu người dùng có quyền truy cập đủ
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

// Sử dụng decorator
class Example {
    @Authenticated
    @AccessRole(UserRole.ADMIN)
    exampleMethod(): void {
        console.log("Access granted");
    }
}

// Kiểm tra kết quả
const exampleInstance = new Example();
exampleInstance.exampleMethod(); // Nếu người dùng đã được chứng thực và có quyền ADMIN, "Access granted" sẽ được in ra
