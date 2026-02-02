let number1 = Number(prompt('type first number'));
let number2 = Number(prompt('type second number'));
let number3 = Number(prompt('type third number'));

// if (number1 >= number2 && number1 >= number3) {
//     console.log(`${number1} the biggest one`);
// } else if (number2 >= number1 && number2 >= number3) {
//     console.log(`${number2} the biggest one`);
// } else {
//      console.log(`${number3} the biggest one`);
// }
let max = number1;

if (number2 > max) {
  max = number2;
}
if (number3 > max) {
  max = number3;
}

console.log(`The biggest number is ${max}`);