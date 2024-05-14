function allPositiveNumbers(arr) {
  return arr.every(num => num > 0);
}
console.log(allPositiveNumbers([1, 2, 3, 4]));  
console.log(allPositiveNumbers([-1, 2, 3, 4]));   
