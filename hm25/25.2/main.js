
console.log(window);
console.log(document);

window.onload = function () {
function draw(color1,color2) {
        
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
var lg = ctx.createLinearGradient(0,0, 150,150);  // create a linear gradient
lg.addColorStop(0,color1);                            // start (=0) the gradient with 'yellow'
lg.addColorStop(1,color2);                               // finish (=1) the gradient with 'red'
ctx.fillStyle = lg;                                 // set the fillStyle to this new linear gradient
ctx.fillRect(0,0, 150,150);                       // draw the third rectangle

  
}
draw('yellow','red');
}





   

