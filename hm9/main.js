class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    sayHello() {
        console.log(`Hello dear ${this._name}`);
    }

}

const person1 = new Person('John', 30);
person1.sayHello();
console.log(person1);

class Student extends Person{
    constructor(name, age, studentId) {
        super(name, age);
        this._studentId = studentId;
    }
    study() {
        console.log(`${this._name} studies Math`);
    }
}
const student1 = new Student('John', 30, 'KJ-2232');
student1.study();