let month = Number(prompt('type a number from 1 to 12'));

    if (month === 12 || month === 1 || month === 2) {
    console.log('it is winter');
} else if (month >= 3 && month<=5) {
    console.log('it is spring');
} else if (month >= 6 && month<=8) {
    console.log('it is summer');
}else if (month >= 9 && month<=11) {
    console.log('it is autumn');
} else {
    console.log('you type wrong number')
}
