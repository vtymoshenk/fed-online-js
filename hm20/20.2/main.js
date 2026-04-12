console.log(window);
console.log(document);

window.onload = function () { 
   let button = document.querySelector('button');
   let counter = 0;
   let intervalCounter;

   button.onclick = function () {
 if (intervalCounter) return;
      intervalCounter = setInterval(function () {
         counter++;
         document.querySelector('p').innerHTML = counter;
         if (counter >= 10) {
            clearInterval(intervalCounter);
            alert('Stop count');
         

         }
      }, 1000);
      
   }
  
        
     }







