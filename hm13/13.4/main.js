console.log(window);
console.log(document);

window.onload = function () {
 const elementsArray = [

    { text: 'Елемент 1', usePrepend: true },

    { text: 'Елемент 2', usePrepend: false },

    { text: 'Елемент 3', usePrepend: true }

    ]
    let container = document.getElementById(container);

    for (let item of elementsArray) {
        let p = document.createElement('p');
        p.textContent = item.text;

        if (item.usePrepend === true) {
            container.before(p);

        } else {
            container.after(p);
        }
    }
}