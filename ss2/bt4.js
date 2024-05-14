function allNumbersDivisibleBy(arr, a) {
  return arr.every(num => num % a === 0);
}
console.log(allNumbersDivisibleBy([4, 6, 8, 10], 2));  
console.log(allNumbersDivisibleBy([4, 6, 8, 11], 2)); 
