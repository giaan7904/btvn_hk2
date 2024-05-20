"use strict";
const parseInput = (input) => {
    switch (input) {
        case "number":
            return 123;
        case "boolean":
            return true;
        case "string":
            return "Hello, world!";
        case "null":
            return null;
        case "undefined":
            return undefined;
        default:
            return undefined;
    }
};
console.log(parseInput("number")); // Output: 123
console.log(parseInput("boolean")); // Output: true
console.log(parseInput("string")); // Output: "Hello, world!"
console.log(parseInput("null")); // Output: null
console.log(parseInput("undefined")); // Output: undefined
console.log(parseInput("unknown")); // Output: undefined
