class Student1{
    age:number
    name:string
    rollno:number
    marks:number[]=[]

    constructor(age:number,name:string,rollno:number,marks:number){
        this.age=age
        this.name=name
        this.rollno=rollno
    }
    display():void{  //function defining         display():string{  //function defining   
        console.log("Age:",this.age)                    // console.log("Age:",this.age)
        console.log("Name:",this.name)                 //  console.log("Name:",this.name)
        console.log("Rollno:",this.rollno)             //  console.log("Rollno:",this.rollno)
                                                       //  return "good morning"
        
       


    }
}
let obj:Student1=new Student1(10,"hilma",30)  
console.log(obj.age)
console.log(obj.name)
console.log(obj.rollno)
obj.display()
