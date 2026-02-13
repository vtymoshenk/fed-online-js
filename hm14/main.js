console.log(window);
console.log(document);

window.onload = function () {
    let headerEl = document.createElement('header');
    headerEl.setAttribute('style', 'background-color:yellow');
    headerEl.style.padding = '50px';
    headerEl.style.textAlign = 'center';
    console.log(headerEl);

    const menuData = [

    { name: 'Головна', url: '/' },

    { name: 'Про нас', url: '/about' },

    { name: 'Послуги', url: '/services' },

    ];
    for (let data of menuData) {
        let aEl = document.createElement('a');
        aEl.setAttribute('target','_blank')
        aEl.textContent = data.name;
        aEl.setAttribute('href', data.url);
          headerEl.append(aEl);

    }
    document.body.prepend(headerEl);

    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    for (let i = 0; i < 50; i++){
        let block = document.createElement('div');
        block.classList.add('circle-elemt');

        block.style.width = '50px';
        block.style.height = '50px';
        block.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
       
        container.append(block);

    }
    document.body.append(container);
    

}