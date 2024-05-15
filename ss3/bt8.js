const insertArray = (arr1, arr2, index) => {
  if (index < 0 || index > arr1.length) {
    console.log("Vị trí chèn không hợp lệ.");
    return;
  }
  const result = [...arr1.slice(0, index), ...arr2, ...arr1.slice(index)];
  return result;
};
const result1 = insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);
console.log(result1); 

const result2 = insertArray(['a', 'b', 'e', 'f'], ['c', 'd'], 2);
console.log(result2);

const result3 = insertArray([1, 2, 3], [4, 5, 6], 10);
