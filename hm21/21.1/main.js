console.log(window);
console.log(document);

window.onload = function () {

   let textInput = document.querySelector('input');
   let btn1 = document.querySelector('.btn1');
   let btn2 = document.querySelector('.btn2');
   let div = document.querySelector('div');

   

   btn1.onclick = function (e) {
      e.preventDefault();
      sessionStorage.setItem('text',textInput.value)
   }
   btn2.onclick = function () {
      let data = sessionStorage.getItem('text');
      div.innerText = data;
   }

}
