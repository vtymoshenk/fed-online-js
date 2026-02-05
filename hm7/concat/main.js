let arrCon1 = [1, 2, 3, 4, 5];
let arrCon2 = [6, 7, 8, 9, 10];
arrCon1=arrCon1.concat(arrCon2);
console.log(arrCon1);

function conFn(arr1, arr2) {
    arr1 = arr1.concat(arr2);
    return arr1;
}
console.log(conFn([2,3,7,7,8],[3,4,5,6,7]))