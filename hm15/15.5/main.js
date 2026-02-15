console.log(window);
console.log(document);

window.onload = function () {
   
    let blockContainer = document.querySelector('.blockContainer');

    blockContainer.onclick = function (e) {
       

        if (e.target.classList.contains('first')) {
            alert('This is first button')
        } else if (e.target.classList.contains('second')) {
             alert('This is second button')
        } else if(e.target.classList.contains('third')) {
             alert('This is third button')
        }
    }

  
}