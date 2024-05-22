class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

const vehicle1 = new Vehicle('Car X', 2020, 'Tesla');
const vehicle2 = new Vehicle('Motorcycle Y', 2018, 'Yamaha');
console.log(`Vehicle 1: Name - ${vehicle1.name}, Year - ${vehicle1.year}, Company - ${vehicle1.company}`);
console.log(`Vehicle 2: Name - ${vehicle2.name}, Year - ${vehicle2.year}, Company - ${vehicle2.company}`);
