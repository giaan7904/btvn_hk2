// Union Types
let numberOrString: number | string;
numberOrString = 10; // Valid
numberOrString = "hello"; // Valid
//numberOrString = true; // Error: Type 'boolean' is not assignable to type 'number | string'

// Intersection Types
interface A {
    propA: number;
}

interface B {
    propB: string;
}

type AB = A & B;

const obj: AB = {
    propA: 10,
    propB: "hello"
};

//Union Types cho phép biến hoặc tham số mang một trong các kiểu dữ liệu được chỉ định.
//Intersection Types kết hợp các kiểu dữ liệu lại với nhau để tạo ra một kiểu mới chứa tất cả các thuộc tính của các kiểu ban đầu.
