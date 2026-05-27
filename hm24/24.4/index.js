console.log(window);
console.log(document);

import {mathPlus,mathMinus,mathMultiply,mathDivide} from "./mathOperations.js";

window.onload = function () {
    console.log(mathPlus(10,5));
    console.log(mathMinus(10,5));
    console.log(mathMultiply(10,5));
    console.log(mathDivide(10,5));
}