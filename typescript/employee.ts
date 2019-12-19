class Employee{
    
    name:string
    age:number
    salary:number

    constructor(name:string,age:number,salary:number){
       
        this.name=name
        this.age=age
        this.salary=salary
    }
}
    let obj:Employee=new Employee("hilma",10,300000)            
                      
        console.log(obj.name)  
        console.log(obj.age)                  
        console.log(obj.salary) 