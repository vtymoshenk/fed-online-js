function getNewArr(arr1,arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr;
}
console.log(getNewArr([1, 2, 3], [3, 5, 6]));