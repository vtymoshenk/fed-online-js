console.log(window);
console.log(document);

window.onload = function () {
 function fun(number1, number2){
 let prom = new Promise((resolve,reject)=>{
     if(number1>number2){
resolve(`this first number ${number1} is bigger`);
     }else if(number1<number2){
resolve(`this second number ${number2} is bigger`);
     }else{
      reject(`this numbers  ${number1} and ${number2} are equal`);
     }
   
 });
 return prom;
};

   

(fun(10,10))
.then(result=>{
   console.log(result);
})
.catch(error=>{
   console.log('err',error)});
}