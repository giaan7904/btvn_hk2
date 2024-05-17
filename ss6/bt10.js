"use strict";
// Hàm thực hiện phép cộng
function add(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return "Invalid input for parameter 'a'.";
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return "Invalid input for parameter 'b'.";
        }
    }
    return a + b;
}
// Hàm thực hiện phép trừ
function subtract(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return "Invalid input for parameter 'a'.";
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return "Invalid input for parameter 'b'.";
        }
    }
    return a - b;
}
// Hàm thực hiện phép nhân
function multiply(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return "Invalid input for parameter 'a'.";
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return "Invalid input for parameter 'b'.";
        }
    }
    return a * b;
}
// Hàm thực hiện phép chia
function divide(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
        if (isNaN(a)) {
            return "Invalid input for parameter 'a'.";
        }
    }
    if (typeof b === 'string') {
        b = parseFloat(b);
        if (isNaN(b)) {
            return "Invalid input for parameter 'b'.";
        }
    }
    if (b === 0) {
        return "Cannot divide by zero.";
    }
    return a / b;
}
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract("10", 3));
console.log("Multiplication:", multiply("5", "2"));
console.log("Division:", divide(10, "2"));
console.log("Invalid input:", divide("abc", 2));
console.log("Division by zero:", divide(10, 0));
