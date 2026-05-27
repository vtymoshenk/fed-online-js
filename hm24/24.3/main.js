
console.log(window);
console.log(document);

window.onload = function () {
let container = document.querySelector('.container');

async function getFilm(){

try {
   const response = await fetch('https://swapi.info/api/planets');
const data = await response.json();
let planet = data[4];

 container.innerHTML = `
 <div class="card-body">
    <h5 class="card-title">${planet.name}</h5>
    <p class="card-text">${planet.climate}</p>
  </div>
 `;
   
} catch (error) {
   console.log(error);
}

}
       
getFilm()

}





   

