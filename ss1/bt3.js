
let arr = [1, 2, 'z', true, -1, -3];
let positiveIntegers = arr.filter(item => Number.isInteger(item) && item > 0);

console.log(positiveIntegers);
