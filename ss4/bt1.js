const sum = (arr) => {
  let total = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      total += num;
    }
  }
  return total;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr));
