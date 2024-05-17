let strVar: string = "2";
let numsVar: number = 2; 
let strAsNum: number = parseInt(strVar);
if (strAsNum == numsVar) {
    console.log("Hai biến có giá trị bằng nhau khi so sánh với toán tử '=='.");
} else {
    console.log("Hai biến không có giá trị bằng nhau khi so sánh với toán tử '=='.");
}

if (strAsNum === numsVar) {
    console.log("Hai biến có giá trị bằng nhau khi so sánh với toán tử '==='.");
} else {
    console.log("Hai biến không có giá trị bằng nhau khi so sánh với toán tử '==='.");
}
