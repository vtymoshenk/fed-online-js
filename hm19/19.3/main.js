console.log(window);
console.log(document);

window.onload = function () {
  let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
  
  let classReg =  /\b[a-zA-Z]{5}\b/g
  
  let findWord = textStr.match(classReg);
   console.log(findWord);

}