
console.log(window);
console.log(document);

window.onload = function () {
let container = document.querySelector('.container');

async function getFilm(){

try {
   const response = await fetch('https://swapi.info/api/films');
const data = await response.json();
let film = data[5];

 container.innerHTML = `
 <div class="card-body">
    <h5 class="card-title">${film.title}</h5>
    <p class="card-text">${film.release_date}</p>
  </div>
 `;
   
} catch (error) {
   console.log(error);
}

}
       
getFilm()

}





   

