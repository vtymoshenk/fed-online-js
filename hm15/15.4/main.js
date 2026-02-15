console.log(window);
console.log(document);

window.onload = function () {
   
    let divs = document.querySelectorAll('div');

    for (let div of divs) {
        
         div.onclick = function () {
             div.remove();
             
              // div.addEventListener('click', function () {
        //     this.remove();
        //  })
    }

   }
}