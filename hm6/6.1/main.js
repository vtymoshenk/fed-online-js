let a = Number(prompt("type first number"));
let b = Number(prompt("type second number"));
let sign = prompt("what are  you goin to do with numbers, put a sign +-/*");

let sum = (a, b) => a + b;
let minus = (a, b) => a - b;
let multiply = (a, b) => a * b;
let division = (a, b) => a / b;

switch (sign) {
    case "+":
        alert(sum(a, b));
        break;
    case "-":
        alert(minus(a, b));
         break;
    case "*":
        alert(multiply(a, b));
         break;
    case "/":
        b===0?alert("you cant put 0"):alert(division(a, b));
         break;
    default:
        alert("you put wrong numbes");
    
}
