"use strict";
const checkType = (variable) => {
    if (typeof variable === 'number') {
        console.log("This is a number");
    }
    else if (Array.isArray(variable)) {
        console.log("This is an array");
    }
    else if (typeof variable === 'object' && variable !== null) {
        console.log("This is an object");
    }
    else {
        console.log("Unknown type");
    }
};
checkType(10);
checkType(["apple", "banana", "orange"]);
checkType({ name: "John", age: 30 });
checkType("Hello");
