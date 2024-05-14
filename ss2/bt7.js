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
  return arr.some(num => isPrime(num));
}
console.log(hasPrimeNumber([4, 6, 8, 9, 10])); 
console.log(hasPrimeNumber([4, 6, 8, 9, 11])); 
