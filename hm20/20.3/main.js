console.log(window);
console.log(document);

window.onload = function () { 
   let button = document.querySelector('button');
   const styles = this.getComputedStyle(document.documentElement);

   const colors = [
        styles.getPropertyValue('--bg-color'),
        styles.getPropertyValue('--bg-color1'),
        styles.getPropertyValue('--bg-color2'),
        styles.getPropertyValue('--bg-color3'),
        styles.getPropertyValue('--bg-color4')
    ];


   button.onclick = function () {
      let randomColor = Math.floor(Math.random() * colors.length);
      document.body.style.background = colors[randomColor];
   }
     }







