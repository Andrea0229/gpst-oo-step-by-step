const Person = require('./person');

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let msg = `${super.introduce()} I am a Student. I am `;
        (this.name = this.klass.leader) ? msg += `Leader of Class ${this.klass.number}.` : msg +=`at Class ${this.klass.number}.`;

        return msg;
    }
}

module.exports = Student;
