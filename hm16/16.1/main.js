console.log(window);
console.log(document);

window.onload = function () {
   let bg = document.querySelector('.bg');
   bg.style.width = '50px';
   bg.style.height ='50px';
   bg.style.background='yellow'

   bg.addEventListener('mouseover', function(e){

    this.style.background = 'pink';
   })

    bg.addEventListener('mouseout', function(e){
   
    this.style.background = 'yellow';
   })
}
