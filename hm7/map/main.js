let arrMap = [1, 2, 3, 4, 5, 6, 7, 8];
let newArrMap = arrMap.map((value, index, arr) => value ** 2);
console.log(newArrMap);

function mapFn(arr, fun) {
    return arr.map(fun);
}
function addString(value) {
    return `Value ${value}`;
}
console.log(mapFn([1, 2, 3, 4], addString));