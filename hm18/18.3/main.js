window.onload = function () {

   let countries = document.querySelector('.countries');
   let info = document.querySelector('.information');

   countries.onchange = function () {

      if (this.value === 'ukraine') {
         info.textContent = 'Capital: Kyiv, Population: ~41 million';
      }

      else if (this.value === 'poland') {
         info.textContent = 'Capital: Warsaw, Population: ~38 million';
      }

      else if (this.value === 'slovenia') {
         info.textContent = 'Capital: Ljubljana, Population: ~2 million';
      }

      else if (this.value === 'canada') {
         info.textContent = 'Capital: Ottawa, Population: ~40 million';
      }

      else {
         info.textContent = '';
      }
   };
}