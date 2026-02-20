console.log(window);
console.log(document);

window.onload = function () {
   let player = document.querySelector('.player');

   player.style.width = '100px';
   player.style.height = '100px';
   player.style.background = 'pink';
   player.style.position = 'absolute';

   let menu = document.querySelector('.menu');
   let items = document.querySelectorAll('.menu li');
   menu.style.display = 'none';
   menu.style.position = 'absolute';

   let x = 100;
   let y = 100;
   let speed = 5;
   let keys = {};
   let current = 0;

   this.document.addEventListener('keydown', function (e) {
      keys[e.key] = true;

      if (e.key === 'm' || e.key === 'M') {
         menu.style.display = 'block';
      }

      if (e.key === 'c' || e.key === 'C') {
         menu.style.display = 'none';
      }

      if (menu.style.display == 'block') {
         if (e.key === 'ArrowDown') {
            items[current].classList.remove('active');
            current = (current + 1) % items.length;
            items[current].classList.add('active');
         }
         if (e.key === 'ArrowUp') {
            items[current].classList.remove('active');
            current = (current - 1 + items.length) % items.length;
            items[current].classList.add('active');
         }
      }
   });

   document.addEventListener('keyup', function (e) {
      keys[e.key] = false;
   })
   setInterval(function () {
      
      if (keys['ArrowRight']) x += speed;
      if (keys['ArrowLeft']) x -= speed;
      if (keys['ArrowDown']) y += speed;
      if (keys['ArrowUp']) y -= speed;

      player.style.left = x + 'px';
      player.style.top = y + 'px';
   }, 16);
}