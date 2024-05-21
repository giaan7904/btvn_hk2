type Student = [string, number, number]; 

let student: Student;
student = ["John", 20, 85];
console.log("Tên học sinh:", student[0]);
console.log("Tuổi:", student[1]);
console.log("Điểm số:", student[2]);
function checkStudentStatus(student: Student): string {
    const [name, age, score] = student;
    let status: string;
    
    if (score >= 80) {
        status = "Giỏi";
    } else if (score >= 60) {
        status = "Khá";
    } else if (score >= 40) {
        status = "Trung bình";
    } else {
        status = "Yếu";
    }
    
    return `${name} - ${age} tuổi - Điểm số: ${score} - Xếp loại: ${status}`;
}
console.log(checkStudentStatus(student));
