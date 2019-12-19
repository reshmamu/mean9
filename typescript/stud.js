var Student = /** @class */ (function () {
    function Student() {
        this.age = 10; // there is no need to use var,let keyword
        this.name = "maya";
    }
    return Student;
}());
var obj = new Student(); //object creation
console.log(obj.age);
console.log(obj.name);
