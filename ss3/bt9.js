const mergeArrays = (...arrays) => {
  const length = arrays[0].length;
  const result = [];
  for (let i = 0; i < length; i++) {
    const temp = [];
    arrays.forEach(arr => {
      temp.push(arr[i]);
    });
    result.push(temp);
  }
  return result;
};
const result = mergeArrays([1, 2, 3], ['a', 'b', 'c'], [true, false, true]);
console.log(result);
