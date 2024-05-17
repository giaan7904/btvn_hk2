"use strict";
let sentence = "Hello, how are you?";
let charSet = new Set();
let filteredSentence = "";
for (let char of sentence) {
    if (!charSet.has(char)) {
        charSet.add(char);
        filteredSentence += char;
    }
}
console.log("Original sentence:", sentence);
console.log("Filtered sentence:", filteredSentence);
