const Person = require('./person');

class Student extends Person{
    constructor(name, age, klazz){
        super(name, age);
        this.clazz = klazz;
    }

    introduce(){
        let msg = `${super.introduce()} I am a Student. I am `;
        (this.name = this.clazz.leader) ? msg += `Leader of Class ${this.clazz.number}.` : msg +=`at Class ${this.clazz.number}.`;

        return msg;
    }
}

module.exports = Student;
