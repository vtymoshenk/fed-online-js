console.log(window);
console.log(document);

window.onload = function () {
    let btn = document.querySelector('.btn');
    let ptext = document.querySelector('.ptext');
    let i = 0;
    ptext.textContent = i;

    function countClick() {
        i++
      ptext.textContent = i;
        if (i >= 10){
            btn.removeEventListener('click',countClick);
       }
    }
    btn.addEventListener('click', countClick);
}