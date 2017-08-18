const Student = require('./student');

class Class {
    constructor(number){
        this.number = number;
    }
    assignLeader(stu){
        this.leader = stu.name;
        stu.introduce();
    }
}

module.exports = Class;