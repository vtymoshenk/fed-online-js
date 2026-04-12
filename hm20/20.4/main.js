console.log(window);
console.log(document);

window.onload = function () { 
   let btnStart = document.querySelector('.btn-start');
   let btnReset = document.querySelector('.btn-reset');
   let timeDisplay = document.querySelector('.time'); 


   let intervalCounter;
   let totalSeconds = 25 * 60;

   function updateTime() {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

      let formatted =
         String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
      timeDisplay.innerHTML = formatted;

        


   }
   updateTime(); 

   btnStart.onclick = function () {
      if (intervalCounter) return;

      intervalCounter = setInterval(function () {
         if (totalSeconds > 0) {
            totalSeconds--;
            updateTime();
         } else {
            clearInterval(intervalCounter);
         }
      }, 1000);
   };
   btnReset.onclick = function(){
      clearInterval(intervalCounter);
      intervalCounter = null;
      totalSeconds = 25 * 60;
      updateTime();
   }


   

}







