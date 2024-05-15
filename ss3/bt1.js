for (let i = 0; i < 6; i++) {
    console.log(i);
  }
  console.log("Outside the loop: " + i);
  //nhận được một lỗi như sau: ReferenceError: i is not defined
  //Điều này xảy ra vì biến i được khai báo bằng từ khóa let chỉ tồn tại trong phạm vi của vòng lặp for. Nó không tồn tại bên ngoài vòng lặp.

  