console.log(window);
console.log(document);

window.onload = function () {

   let btnAdd = document.querySelector('.add');
   let input = document.querySelector('input');
   let ul = document.querySelector('ul');

   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

   function render() { 
      ul.innerHTML = '';
      tasks.forEach((task, index) => {
          let li = document.createElement('li');
      li.textContent = task;

      let btnDel = document.createElement('button');
      btnDel.textContent = 'delete';

         btnDel.onclick = function () {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            render();
         };
         li.appendChild(btnDel);
         ul.appendChild(li);
      })
   }
   btnAdd.onclick = function (e) {
      e.preventDefault();
      if (input.value.trim() !== '') {
         tasks.push(input.value);
         localStorage.setItem('tasks', JSON.stringify(tasks));

         input.value = '';
         render();
      }
   }
   render();


   }


   btnAdd.onclick = function () {



   }

 




   

