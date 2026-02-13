console.log(window);
console.log(document);

window.onload = function () {
    let firstLi = this.document.querySelectorAll('#tree > li');
    console.log(firstLi);
    console.log(firstLi.length);

    let second = document.querySelectorAll('#tree>li>ul>li');
    console.log(second);

    console.log(second.length);
}