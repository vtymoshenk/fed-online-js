let fillArr = new Array(10);
fillArr.fill(2);
fillArr.fill('3', 7);

console.log(fillArr);

function fillFun(arr, indStart,indEnd, num) {
    arr.fill(num, indStart, indEnd);
    return arr;

}
console.log(fillFun([1, 2, 3, 4, 5, 6, 7, 8], 0, 4, 6));