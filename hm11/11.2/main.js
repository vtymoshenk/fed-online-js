console.log('Task1')
function restFn(firstValue, ...values) {
    console.log(firstValue);
    console.log(values);
}

restFn(1, 2, 3, 4, 5);

// function middleValue(arr) {
//     let sum = 0;
//     let midVal = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     midVal = sum / arr.length;
//     return midVal;

// }
// console.log(middleValue([2, 2]))
console.log('Task2')
function middleValue(...numbers) {
    let sum = 0;
    for (num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log(middleValue(2, 2));
