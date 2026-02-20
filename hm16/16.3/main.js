console.log(window);
console.log(document);

window.onload = function () {
   let bg = document.querySelector('.bg');
   let cat = document.querySelector('.cat');
   cat.style.width = '100%';
   cat.style.height = '100%';
   bg.style.width = '200px'

   bg.style.margin = '200px auto';

   bg.addEventListener('mouseover', function (e) {
      
      this.style.width = '400px'
      this.style.boxShadow = '0 0 20px pink';
   })

    bg.addEventListener('mouseout', function(e){
   
       this.style.width = '200px';
       this.style.boxShadow = 'none';
   })
}
