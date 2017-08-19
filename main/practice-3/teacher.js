const Person = require('./person');

/**
 * classes是一个lass类测数组
 */
class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.clazzes = classes;
    }

    /**
     * 老师是否带这个学生
     * @param stu
     */
    isTeaching(stu){
        return this.clazzes.some(clazz =>{
            return clazz.hasStudent(stu);
        })
    }

    introduce(){
        let msg = "";                       //introduce中的内容
        let clss = [];                      //所有班级编号
        this.clazzes.forEach(item =>{
            clss.push(item.number);
        });
        msg = `${super.introduce()} I am a Teacher. I teach `;
        (clss.length>0) ? msg += `Class ${clss.join(",")}.` : msg += `No Class.`;

        return msg;
    }

    notifyStudentAppended(){

    }

    notifyLeaderAssigned(){

    }
}

module.exports = Teacher;