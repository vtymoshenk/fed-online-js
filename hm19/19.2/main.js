console.log(window);
console.log(document);

window.onload = function () {
 let operation = "5 плюс 7 = 3";
   let regClass = /\d+/g;

   let findNumbers = operation.match(regClass);
   console.log(findNumbers);
  

}