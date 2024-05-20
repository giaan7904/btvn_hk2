
interface Person {
    name: string;
    age: number;
    addres: string; 
}

// Định nghĩa interface Employee kế thừa từ Person và có thêm thuộc tính employeeId
interface Employee extends Person {
    employeeId: string;
}
const employee: Employee = {
    name: "John",
    age: 30,
    addres: "123 Main St", 
    employeeId: "E12345"
};

console.log(employeee)
