console.log(window);
console.log(document);

window.onload = function () {
 function fun(str){
 let prom = new Promise((resolve,reject)=>{
   setTimeout(function(){
      resolve(str.toUpperCase());
   },2000);  
 });
 return prom;
};

   

(fun('ksdjds'))
.then(result=>{
   console.log(result);
})
.catch(error=>{
   console.log('err',error)});
}