// cách 1
function sum(arr) {
  let total = 0;
  arr.forEach(num => {
    total += num;
  });
  return total;
}
console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([-1, 2, -3, 4, -5])); 

// cách 2
function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([-1, 2, -3, 4, -5])); 