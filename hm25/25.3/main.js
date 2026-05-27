
console.log(window);
console.log(document);

window.onload = function () {
function draw() {
        
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.moveTo(10,10);
  ctx.lineTo(100,140);
  ctx.stroke();




  
}
draw();
}





   

