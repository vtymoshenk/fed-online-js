console.log(window);
console.log(document);

window.onload = function () {
   let form = document.querySelector('form');
   let input = document.querySelector('input');
   let add = document.querySelector('.add');
   let tasks =  document.querySelector('.tasks');
   
   // let isValid = true;
   // input.classList.remove('is-invalid');


   add.onclick = function (e) {
      e.preventDefault();
         if (input.value === '') {
      input.classList.add('is-invalid');
            return;
      }
      input.classList.remove('is-invalid');

      let div = document.createElement('div');
      div.className = 'alert alert-dark d-flex justify-content-between';

      let span = document.createElement('span');
      span.textContent = input.value;

      let btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.className = 'btn btn-outline-danger btn-sm';

      btn.onclick = function () {
         div.remove();
      };

      div.append(span, btn);
      tasks.append(div);

      input.value = '';
   }

   
}