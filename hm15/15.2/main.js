console.log(window);
console.log(document);

window.onload = function () {
    let btn = document.querySelector('.btn');
    btn.style.width = '60px';
    btn.style.height = '30px';

    btn.ondblclick = function () {
      
        let currentWidth = parseInt(btn.style.width);
        let currentHeight = parseInt(btn.style.height);

        btn.style.width = currentWidth * 2 + 'px';
        btn.style.height = currentHeight * 2 + 'px';;
    }

}