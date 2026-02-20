console.log(window);
console.log(document);

window.onload = function () {
   let text = document.querySelector('.text');
   let menu=document.querySelector('.menu');
   text.style.width = '350px';
   text.style.height ='50px';
   text.style.background = 'yellow';
   menu.style.position = 'absolute';
   menu.style.display = 'none';


   text.addEventListener('contextmenu', function (e) {
      e.preventDefault();

    menu.style.display = 'block';
    menu.style.left = e.pageX + 'px';
    menu.style.top = e.pageY + 'px';
   })

   menu.addEventListener('click', function (e) {
      let action = e.target.dataset.action;

      if (action === 'left') text.style.textAlign = 'left';
      if (action === 'right') text.style.textAlign = 'right';
      if (action === 'center') text.style.textAlign = 'center';
      if (action === 'hide') text.style.display = 'none';

      menu.style.display = 'none';
   })

   document.addEventListener('click', function () {
      menu.style.display = 'none';
   })

 
}
