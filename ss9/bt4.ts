function checkSuccess(input: "success" | string): boolean {
    return input === "success";
}

console.log(checkSuccess("success")); // true
console.log(checkSuccess("failure")); // false
console.log(checkSuccess("")); // false
