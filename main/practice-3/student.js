const Person = require('./person');
const Class = require('./class');

class Student extends Person{
    constructor(name, age, klazz){
        super(name, age);
        this.clazz = klazz;
    }

   /* changeClassMember(clazz){
        this.clazz = clazz;
    }*/

    introduce(){
        let msg = `${super.introduce()} I am a Student. `;

        if(this.clazz.hasStudent(this)){
            (this.name = this.clazz.leader) ? msg +=
                `I am Leader of Class ${this.clazz.number}.` :
                msg +=`I am at Class ${this.clazz.number}.`;
        }
        else{
            msg += `I haven't been allowed to join Class.`;
        }

        return msg;

    }
}

module.exports = Student;
