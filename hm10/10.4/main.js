function getBirtYear(age) {
    let nowYear = new Date();
    return  nowYear.getFullYear() - age;
    
}

console.log(getBirtYear(22));

