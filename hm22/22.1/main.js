console.log(window);
console.log(document);

window.onload = function () {
new Promise((resolve, reject)=>{
   resolve(10);

}).then(number=>{
   console.log(number + 10);
   return number +10;
}).then(number=>{
   console.log(number * 10);
   return number *10;
}).then(number=>{
    console.log(number - 10);
   return number-10;
}).catch(error=>{
   console.log('err',error);
});

   }

 




   

