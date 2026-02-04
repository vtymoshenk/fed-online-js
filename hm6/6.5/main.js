function sendString(text, callback) {
  callback(text);
  
}
function callb(str) {
   console.log(str);
}

sendString("hi", callb);
