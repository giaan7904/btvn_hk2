
const Employee = {
  name: "",
  age: 0
};
const employees = [
  { name: "nguyen van a", age: 30 },
  { name: "nguyen van b", age: 25 },
  { name: "nguyen van c", age: 35 }
];
function sortEmployee(arr, order) {
  if (order === "Increase") {
    return arr.slice().sort((a, b) => a.age - b.age);
  } else if (order === "Decrease") {
    return arr.slice().sort((a, b) => b.age - a.age);
  } else {
    return "Invalid order. Please use 'Increase' or 'Decrease'.";
  }
}
console.log("Increase:");
console.log(sortEmployee(employees, "Increase"));
console.log("Decrease:");
console.log(sortEmployee(employees, "Decrease"));
