console.log(window);
console.log(document);

window.onload = function () {

   let radios = document.querySelectorAll('input[name="color"]');

   let saveColor = localStorage.getItem('bgColor');
   if (saveColor) {
      document.body.style.backgroundColor = saveColor;
   }

   radios.forEach(radio => {
      if (radio.value === saveColor) {
         radio.checked = true;
      }
   })

  
    radios.forEach(radio => {
      radio.addEventListener('change', function () {
         if (this.checked) {
            document.body.style.backgroundColor = this.value;

            localStorage.setItem('bgColor', this.value);
         }
      });
   });

}



   

