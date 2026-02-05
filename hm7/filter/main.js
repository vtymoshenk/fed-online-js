let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterNum = arrFilter.filter(num => num % 2 === 0);
console.log(filterNum);

function filterFn(arr, condition) {
   return arr.filter(condition);
}

function isEven(values) {
    return values % 2 === 0;
}

console.log(filterFn(arrFilter, isEven));