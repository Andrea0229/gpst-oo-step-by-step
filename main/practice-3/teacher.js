const Person = require('./person');

/**
 * classes是一个lass类测数组
 */
class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.classes = [];
        classes.forEach(item=>{             //所带班级，每一班级都是一个lass属性
            this.classes.push(item);
        });
    }

    introduce(){
        let msg = "";                       //introduce中的内容
        let clss = [];                      //所有班级编号
        this.classes.forEach(item =>{
            clss.push(item.number);
        });
        msg = `${super.introduce()}. I am a Teacher. I teach `;
        (clss.length>0) ? msg += `Class ${clss.join(",")}.` : msg += `No Class.`;

        return msg;
    }
}

module.exports = Teacher;