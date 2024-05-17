let sentence: string = "Hello, how are you?";
let charSet: Set<string> = new Set();
let filteredSentence: string = "";
for (let char of sentence) {
    if (!charSet.has(char)) {
        charSet.add(char);
        filteredSentence += char;
    }
}

console.log("Original sentence:", sentence);
console.log("Filtered sentence:", filteredSentence);
