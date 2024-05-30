// Hàm property decorator
function TheoDoiPass(sokytumin: number, sokytumax: number) {
    return function(target: any, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        };

        const setter = function(newVal: string) {
            if (newVal.length < sokytumin || newVal.length > sokytumax) {
                throw new Error(`Password length must be between ${sokytumin} and ${sokytumax} characters`);
            }
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

// Class User
class User {
    @TheoDoiPass(6, 12)
    password: string;

    constructor(public username: string, password: string) {
        this.password = password;
    }
}

// Sử dụng class User
const user = new User("username", "123456");
console.log(user.password); // 123456

// Lỗi: Password length must be between 6 and 12 characters
// const user2 = new User("username", "123"); 
