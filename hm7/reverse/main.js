let arrRev = [1, 2, 3, 4, 5];
arrRev.reverse();
console.log(arrRev);

function revFn(arr) {
    arr.reverse();
    return arr;
}
console.log(revFn([2,3,7,7,8]))