function filterArray(arr1, arr2) {
    let filteredArr = arr1.filter(item => !arr2.includes(item));
    let removedArr = arr1.filter(item => arr2.includes(item));
    arr1.splice(0, arr1.length, ...filteredArr);
}
let arr1 = [1, 2, '1', 3, 'a'];
let arr2 = [1, 2, 3, 4];
console.log(filterArray(arr1, arr2));
console.log(arr1);
