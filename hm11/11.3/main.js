function typeFn(value) {
    return typeof (value);
}
console.log(typeFn('jkd'));
console.log(typeFn(1323));

function typeFn2(value) {
    if (typeof(value) === 'number') {
        console.log(`${value} Це число`);
    } else if (typeof (value) === 'string') {
        console.log(`${value} Це рядок`);
    } else {
        console.log(`${value} Це інший тип`);
    }
}
typeFn2(223);