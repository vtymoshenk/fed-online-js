window.onload = function () {

   let pizzas = document.querySelector('.pizzas');
   let sizes = document.querySelectorAll('input[name="size"]');
   let toppings = document.querySelectorAll('input[name="topping"]');
   let information = document.querySelector('.information');


   function calculatePrice() {
      let price = 0
       if (pizzas.value === 'Pepperoni') price = 350;
      if (pizzas.value === 'cheese') price = 360;
      if (pizzas.value === 'hawaiian') price = 370;
      if (pizzas.value === 'capricciosa') price = 370;

      for (let size of sizes) {
         if (size.checked) {
            if (size.value === 'medium') price += 50;
            if (size.value === 'big') price += 100;
         }
      }

      for (let top of toppings) {
         if (top.checked) {
            price += 25;
         }
      }


      information.textContent = `Total price: ${price}`;

   }
   
   pizzas.onchange = calculatePrice;
   
    for (let size of sizes) {
      size.onchange = calculatePrice;
   }

   for (let top of toppings) {
      top.onchange = calculatePrice;
   }
  
}