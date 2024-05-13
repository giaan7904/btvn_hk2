function insertArray(arr1, arr2, index) {
    arr1.splice(index, 0, ...arr2);
    return arr1;
}
let arr1 = [1, 2, 'a', 6, 7];
let arr2 = ['b', 'hai'];
let index = 2;
console.log(insertArray(arr1, arr2, index));  
