function findMaxLessThanEqualTo(arr, num) {
    let filteredArr = arr.filter(item => item <= num);
    let max = Math.max(...filteredArr);
    return max;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(findMaxLessThanEqualTo(arr, num));
