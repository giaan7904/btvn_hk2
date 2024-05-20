"use strict";
const processInput = (input) => {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    }
    else {
        throw new Error('Invalid input type');
    }
};
processInput("Hello");
processInput(["apple", "banana", "orange"]);
