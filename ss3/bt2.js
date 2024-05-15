const number = 10;
number = 20;
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log("number:", number);
console.log("array:", array);
//nhận được một lỗi như sau:TypeError: Assignment to constant variable.
// lưu ý: Điều này gây ra lỗi vì biến đã được khai báo bằng từ khóa const