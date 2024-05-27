// Lớp abstract Job
class Job {
    constructor(type) {
        this.type = type;
    }
    
    // Phương thức in ra loại công việc
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
    
    // Phương thức trừu tượng tính lương
    calculateSalary() {
        throw new Error("Phương thức trừu tượng calculateSalary phải được triển khai");
    }
}

// Lớp PartimeJob kế thừa từ Job
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    
    // Override phương thức printType để in ra loại công việc
    printType() {
        super.printType();
    }
    
    // Override phương thức calculateSalary để tính lương công việc part-time
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}

// Lớp FulltimeJob kế thừa từ Job
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    
    // Override phương thức printType để in ra loại công việc
    printType() {
        super.printType();
    }
    
    // Override phương thức calculateSalary để tính lương công việc full-time
    calculateSalary() {
        return 10000000; // Lương full-time mặc định là 10.000.000
    }
}

// Ví dụ sử dụng
const partTimeJob = new PartimeJob("Part-time", 20);
partTimeJob.printType(); // In ra: Loại công việc: Part-time
console.log("Lương: ", partTimeJob.calculateSalary()); // In ra: Lương: 600000

const fullTimeJob = new FulltimeJob("Full-time");
fullTimeJob.printType(); // In ra: Loại công việc: Full-time
console.log("Lương: ", fullTimeJob.calculateSalary()); // In ra: Lương: 10000000
