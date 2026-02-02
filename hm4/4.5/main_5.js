let mark = Number(prompt('what is your mark'));

if (mark >= 90 && mark <= 100) {
    console.log('A');
}else if (mark >= 80 && mark <= 89) {
   console.log('B');
}else if (mark >= 70 && mark <= 79) {
   console.log('C');
}else if (mark >= 60 && mark <= 69) {
   console.log('D');
} else if (mark < 60) {
   console.log('F');
}
console.log('Mark before increment:', mark);
let newMark = mark++;
console.log('Mark after increment:', mark);

console.log(newMark < 60 ? 'you are not enrolled' : 'you are enrolled');

