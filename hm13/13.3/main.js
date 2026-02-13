console.log(window);
console.log(document);

window.onload = function () {
 const elementsArray = [

    { tag: 'p', text: 'Елемент 1' },

    { tag: 'div', text: 'Елемент 2' },

    { tag: 'span', text: 'Елемент 3' }

    ];      

    let container = document.getElementById('container');

    function createElementFromObject(obj) {
        let newElement = document.createElement(obj.tag);
        newElement.textContent = obj.text;
        return newElement;
    }

    for (let element of elementsArray) {
        let createdElement = createElementFromObject(element);
        container.append(createdElement);
    }
}