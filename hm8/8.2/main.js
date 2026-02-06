const person = {

    name: 'John',

    age: 25,

    occupation: 'Developer'

};
for (const key in person) {
    console.log(`${person[key]}`);
  }