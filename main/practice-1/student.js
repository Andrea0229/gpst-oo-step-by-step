const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klazz = klass;
    }

    introduce(){
        return super.introduce() + " I am at Class " + this.klazz + ". ";
    }
};