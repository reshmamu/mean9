var Student1 = /** @class */ (function () {
    function Student1(age, name, rollno) {
        this.age = age;
        this.name = name;
        this.rollno = rollno;
    }
    Student1.prototype.display = function () {
        console.log("Age:", this.age);
        console.log("Name:", this.name);
        console.log("Rollno:", this.rollno);
    };
    return Student1;
}());
var obj = new Student1(10, "hilma", 30);
console.log(obj.age);
console.log(obj.name);
console.log(obj.rollno);
obj.display();
