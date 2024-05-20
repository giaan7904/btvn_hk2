"use strict";
if (typeof processInput === 'undefined') {
    const processInput = (input) => {
        if (typeof input === 'number') {
            return input * input;
        }
        else if (typeof input === 'string') {
            return input.length;
        }
        else if (Array.isArray(input)) {
            return input.length;
        }
        else {
            throw new Error('Invalid input type');
        }
    };
    console.log(processInput(5));
    console.log(processInput("hello"));
    console.log(processInput([1, 2, 3, 4]));
}
