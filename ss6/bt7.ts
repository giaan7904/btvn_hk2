
let number1: number = 10;
let number2: number = 5;
let number3: number;

number3 = number1 + number2;
console.log("Result after addition:", number3);

number3 = number1 - number2;
console.log("Result after subtraction:", number3);

number3 = number1 * number2;
console.log("Result after multiplication:", number3);

number3 = number1 / number2;
console.log("Result after division:", number3);
number1 = "10" as unknown as number;
number2 = true as unknown as number; 

number3 = number1 + number2;
console.log("Result after addition with changed data types:", number3);

number3 = number1 - number2;
console.log("Result after subtraction with changed data types:", number3);

number3 = number1 * number2;
console.log("Result after multiplication with changed data types:", number3);

number3 = number1 / number2;
console.log("Result after division with changed data types:", number3);
