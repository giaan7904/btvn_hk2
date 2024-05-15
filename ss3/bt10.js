const sumArrays = (...arrays) => {
  const result = [];
  arrays.forEach(arr => {
    const sum = arr.reduce((total, currentValue) => total + currentValue, 0);
    result.push(sum);
  });
  return result;
};
const result = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(result);
