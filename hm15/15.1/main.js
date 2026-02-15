console.log(window);
console.log(document);

window.onload = function () {
    let btn = document.querySelector('.btn');
    let text = document.querySelector('.ptext'); 

    btn.onclick = function () {
        text.style.color = getRandomColor();
    }

    function getRandomColor() {
        return `rgb(
        ${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random()*255)}
        )`
    }

}