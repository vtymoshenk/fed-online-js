
console.log(window);
console.log(document);

window.onload = function () {
function draw() {
        
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

   ctx.fillRect(20, 70, 30, 50);
   ctx.fillRect(30, 40, 30, 50);
    ctx.fillRect(55, 10, 30, 50);

        }
}
draw();
}





   

