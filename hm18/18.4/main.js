console.log(window);
console.log(document);

window.onload = function () {
   let formEl = document.querySelector('form');
   let outputtext = document.querySelector('.outputtext');
   
   let [...radioButtons] = this.document.querySelectorAll('input[name="rate"]');
   formEl.addEventListener('change', () => {
    
      for (let radiobutton of radioButtons) {
         if (radiobutton.checked && (radiobutton.value === '1' || radiobutton.value === '2')) {
            outputtext.textContent ='Дякуємо за вашу оцінку(((('
         } else if(radiobutton.checked && radiobutton.value === '3' ){
            outputtext.textContent ='Дякуємо за вашу оцінку'
         }
          else if(radiobutton.checked && (radiobutton.value === '4' || radiobutton.value === '5') ){
            outputtext.textContent ='Дякуємо за вашу оцінку!!!!'
         }
      }
   })
 



}