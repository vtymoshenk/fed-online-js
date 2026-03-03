console.log(window);
console.log(document);

window.onload = function () {
   let formEl = document.querySelector('form');
   let outputRes = document.querySelector('body');
   
   let [...radioButtons] = this.document.querySelectorAll('input[name="color"]');
   formEl.addEventListener('change', () => {
      let selectColor = '';
      for (let radiobutton of radioButtons) {
         if (radiobutton.checked) {
            outputRes.style.background = radiobutton.value;
            break;
         }
      }
   })
 



}