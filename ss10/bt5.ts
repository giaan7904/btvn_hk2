class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee: string): void {
        this.employees.push(employee);
    }
    describe(): void {
        console.log(`Department ID: ${this.id}, Name: ${this.name}`);
    }
    printEmployeeInformation(): void {
        console.log(`Employees in department ${this.name}: ${this.employees.join(', ')}`);
    }
}
const accounting = new Department(1, 'Accounting');

accounting.addEmployee('Gia An');
accounting.addEmployee('An Heo');
accounting.describe();
accounting.printEmployeeInformation();
