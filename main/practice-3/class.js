const Student = require('./student');

class Class {
    constructor(number){
        this.number = number;
        this.members = [];
    }
    assignLeader(stu){
        if(this.hasStudent(stu)){
            this.leader = stu.name;
            return `Assign team leader successfully.`;
        }
        else{
            return `It is not one of us.`;
        }

    }
    appendMember(stu){
        this.members.push(stu);
        // stu.changeClassMember(this);
    }
    /** 学生是否在这个班级 */
    hasStudent(stu){
        return this.members.some(member=>{
            return member.id === stu.id;
        });
    }
}



module.exports = Class;