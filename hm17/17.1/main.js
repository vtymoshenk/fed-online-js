console.log(window);
console.log(document);

window.onload = function () {
   let inputSum = document.querySelector('.inputSum');
   let inputCurrency = document.querySelector('.inputCurrency');
   let convertBut = document.querySelector('.convertBut');
   let form = document.querySelector('form');
   let result = document.querySelector('.result');

   console.log(...form);

   convertBut.onclick = function (e) {
      e.preventDefault();
      switch (inputCurrency.value) {
         case 'dollar':
            result.textContent = `${Number(inputSum.value) * 0.023} dollars`;
            break;
         case 'evro': 
             result.textContent = `${Number(inputSum.value) * 0.020} evros`;
            break;
         case 'pln':
            result.textContent = `${Number(inputSum.value) * 0.083} pln`;
            break;
         
         default:
            break;
      }
      
}



}