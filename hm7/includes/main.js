let arrInc = [1, 2, 3, 4, 5];
console.log(arrInc.includes(4));

function incFn(arr, elem) {
    return arr.includes(elem);
}
console.log(incFn([2,3,7,7,8],1));