console.log(window);
console.log(document);

window.onload = function () {

   function mesagetime(text, time) {
     
      setTimeout( ()=> {
         console.log(text);
    },time)

  
   }

   mesagetime('hello', 2000);
}