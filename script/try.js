let student = {
    name: 'john',
    class: 1,
    get _john(){
        return this.class
    }
};



console.log(student._john);



class Student {
    counter = 1;
    constructor(){
        this.id = this.counter;
        Student.counter ++;
    }
    
}

var a = new Student;
var b = new Student;
var c = new Student;
console.log("a" + a.id + "b" + b.id + "c" + c.id);