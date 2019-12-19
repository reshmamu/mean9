var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var obj = new Employee("hilma", 10, 300000);
console.log(obj.name);
console.log(obj.age);
console.log(obj.salary);
