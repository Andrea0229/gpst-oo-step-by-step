const Student = require('./student');

class Class {
    constructor(number){
        this.number = number;
        this.members = [];
    }
    assignLeader(stu){
        this.leader = stu.name;
        // stu.introduce();
    }
    appendMember(stu){

    }
}

module.exports = Class;