console.log(window);
console.log(document);

window.onload = function () {
const booksArray = [

    {

        title: 'Пригоди Аліси в Країні Див',

        year: 1865,

        rating: 4.5

    },

    {

        title: '1984',

        year: 1949,

        rating: 4.8

    },

    {

        title: 'Гаррі Поттер і філософський камінь',

        year: 1997,

        rating: 4.7

    }

    ];


    let tbody = document.querySelector('#books');
    
    for (let book of booksArray) {
        let tr = document.createElement('tr');
        let tdTitle = document.createElement('td')
        tdTitle.textContent = book.title;

        let tdYear = document.createElement('td');
        tdYear.textContent = book.year;

        let tdRating = document.createElement('td');
        tdRating.textContent = book.rating;

        tr.append(tdTitle, tdYear, tdRating);
        tbody.append(tr);
    }
}