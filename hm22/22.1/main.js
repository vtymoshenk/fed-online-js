console.log(window);
console.log(document);

window.onload = function () {

   let javaScript = {
      strings: "kdsjhdkjhdk",
      numbers: 34,
      arr: [1, 2, 3, 4, 3] ,
      obj:{
         hi:'this is obj',

      },
  }

   let a = document.createElement('a');
   let json = JSON.stringify(javaScript);
   let file = new Blob([json], { type: "application/json" });

   a.href = URL.createObjectURL(file);
   a.download = 'data.json';
   a.click();

   }

 




   

