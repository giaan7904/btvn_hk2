"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
    printEmployeeInformation() {
        console.log(`Employees in department ${this.name}: ${this.employees.join(', ')}`);
    }
}
const accounting = new Department(1, 'Accounting');
accounting.addEmployee('Gia An');
accounting.addEmployee('An Heo');
accounting.describe();
accounting.printEmployeeInformation();
