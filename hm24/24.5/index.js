console.log(window);
console.log(document);

import {upperCase,reverseFn} from "./stringUtilities.js";


window.onload  = function(){

    console.log(upperCase('hello'));
    console.log(reverseFn('hello'));
}