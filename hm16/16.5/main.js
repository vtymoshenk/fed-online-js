console.log(window);
console.log(document);

window.onload = function () {
   let area = document.querySelector('.area');
   let box = document.querySelector('.box');

   let isGrabing = false;

   box.addEventListener('mousedown', function () {
      isGrabing = true;
      box.style.cursor = 'grabbing';
   });
   document.addEventListener('mouseup', function (e) {
      isGrabing = false;
      box.style.cursor = 'grab';

   });

   document.addEventListener('mousemove', function (e) {
      if (!isGrabing) return;
      let rect = area.getBoundingClientRect();
      let x = e.clientX - rect.left - box.offsetWidth / 2;
      let y = e.clientY - rect.top - box.offsetHeight / 2;

      x = Math.max(0, Math.min(x, area.clientWidth - box.offsetWidth));
      y = Math.max(0, Math.min(y, area.clientHeight - box.offsetHeight));

      box.style.left = x + 'px';
      box.style.top = y + 'px';
     


   })


}