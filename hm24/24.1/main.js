
console.log(window);
console.log(document);

window.onload = function () {
let input = document.querySelector('input');
let but = document.querySelector('button');



but.addEventListener('click', async(event)=>{
   event.preventDefault();

   let userId = input.value;

   try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}` 
      );
      const user = await response.json();
      console.log(user);
       document.body.innerHTML+=
         `<div>
         <h2>${user.name}</h2>
         <p>${user.email}</p>
         </div>`;
       
   }catch(error){
      console.log(error);
   }

});
       


}





   

