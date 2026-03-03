console.log(window);
console.log(document);

window.onload = function () {
   let formEl = document.querySelector('form');
   let outputRes = document.querySelector('body');
   let allhobby =document.querySelector('.allhobby')
   
   let [...checkBoxes] = this.document.querySelectorAll('input[name="hobby"]');
   formEl.addEventListener('change', () => {
      let selecthobby = [];
      for (let checkBox of checkBoxes) {
         if (checkBox.checked) {
            selecthobby.push(checkBox.value)
         
         }
      }
      allhobby.textContent=selecthobby.join(', ')
   })
 



}