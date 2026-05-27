
console.log(window);
console.log(document);

window.onload = function () {

   let but = document.querySelector('.but');
   let card = document.querySelector('.planetCard');
    

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
         console.log(json)
      json.forEach(user=>{
         console.log(`Name: ${user.name}, email: ${user.email}`);
      });

   })
   .catch(error =>{
      console.log('error', error);
   })

   

   fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user=>{
         
         console.log('id:', user.id);
         console.log('name:', user.name);
         console.log('phone:', user.phone);
         console.log('email:', user.email);
         console.log('username:', user.username);
         console.log('website:', user.website);
         
      }) .catch(error =>{
      console.log('error', error);
   })

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(posts => {
         posts.forEach(post=>{
            console.log(`title ${post.title}`)
         });
      }) .catch(error =>{
      console.log('error', error);
   })



but.addEventListener('click', event=>{ 
event.preventDefault();
fetch('https://swapi.info/api/planets/1')
      .then(response => response.json())
      .then(json =>{
         console.log(json)

         card.innerHTML='';

         let html= ` <div class="card mt-4 shadow p-3">
                        <div class="card-body">
                            <h2 class="card-title mb-4">${json.name}</h2>`;

                            Object.entries(json).forEach(([key, value])=>{
                              if(Array.isArray(value)){
                                 html+=`<p><strong>${key}:</strong><br>`;
                                 value.forEach(item =>{
                                    if(typeof item ==='string' && item.startsWith('http')){
                                      html += `
                                    <a href="${item}" target="_blank" class="d-block">
                                        ${item}
                                    </a>
                                `; 
                                    }else{
                                       html+=`${item}<br>`;
                                    }
                                 });
                                 html+= `</p>`
                              }
                              else if(typeof value === 'string'&& value.startsWith('http')){
                                 html += `
                            <p>
                                <strong>${key}:</strong>
                                <a href="${value}" target="_blank">
                                    ${value}
                                </a>
                            </p>
                        `;
                              } else {
                        html += `
                            <p>
                                <strong>${key}:</strong> ${value}
                            </p>
                        `;
                    }
                            });
                         html += `
                        </div>
                    </div>
                `;

                
                card.innerHTML = html;   




      } ) 
})

}





   

