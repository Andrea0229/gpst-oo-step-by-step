// Write your code here
var  id =1;
class Person {
    // this.id = 1;
    constructor(name, age){
        this.id = id++;
        this.name = name;
        this.age = age;
        // this.id++;
    }

    introduce(){//console.log(Person.id+"==============================================")
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

module.exports = Person;
