let arrSplice = [1, 2, 3, 4, 5, 6];
arrSplice.splice(2, 2);
console.log(arrSplice);

function spliceFn(arr, ind, amount) {
    arr.splice(ind, amount);
    return arr;
}
console.log(spliceFn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 4));