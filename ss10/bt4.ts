class Vehiclee {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}
const myVehicle = new Vehicle(1, 'Model S', 2021, 'BMW');
myVehicle.printInfo();
console.log(`Vehicle ID: ${myVehicle.id}`);
console.log(`Vehicle Name: ${myVehicle.name}`);
// console.log(`Vehicle Year: ${myVehicle.year}`); // Lỗi vì year là protected
// console.log(`Vehicle Company: ${myVehicle.company}`); // Lỗi vì company là private
