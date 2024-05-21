
interface Person {
    name: string;
    age: number;
    addres: string; 
}

// Định nghĩa interface Employee kế thừa từ Person và có thêm thuộc tính employeeId
interface Employee extends Person {
    employeeId: string;
}


//console.log(employeee)
