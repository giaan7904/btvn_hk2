function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
function hasPrimeNumber(arr) {
  return arr.every(num => isPrime(num));
}
console.log(hasPrimeNumber([2, 3, 5, 7, 11])); 
console.log(hasPrimeNumber([1, 2, 3, 4, 5]));
