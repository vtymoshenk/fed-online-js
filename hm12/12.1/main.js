console.log(window);
console.log(document);

window.onload = function () {
    let headId = document.getElementById('headID');
    console.log(headId);
    let headClass = document.getElementsByClassName('head-class');
    console.log(headClass);
    let hedearTag = document.getElementsByTagName('header');
    console.log(hedearTag);
    let sectionTag = document.getElementsByTagName('section');
    console.log(sectionTag);
    let divTag = document.getElementsByTagName('div');
    console.log(divTag);
   

    let firstAnimal = document.querySelector('ul li');
    console.log(firstAnimal);
    let lastAnimal = document.querySelector('ul li:last-child');
    console.log(lastAnimal);
    let thirdAnimal = document.querySelector('ul li:nth-child(3)');
    console.log(thirdAnimal);

    let allAnimals = this.document.querySelectorAll('ul li');
    console.log(allAnimals);

    let [...liElem] = document.querySelectorAll('li');
    console.log(liElem)

    

}