function student(rollno,name,age,marks){
    this.Rollno=rollno
    this.Name=name
    this.Age=age
    this.marks=marks

    this.details=function(){
        console.log("Name",this.Name)
        console.log("Rollno",this.Rollno)
        console.log("Age",this.Age)

    }

    this.average=function(){
        sum=0
        for(i of this.marks){         // "of" operator is used for getting values from the array
            sum+=i
        }
        avg=sum/this.marks.length
        console.log(avg)
    }




    
}

var s1=new student("1","Ann","12",[20,30,40])
s1.details()
s1.average()

var s2=new student("10","Anu","14")

console.log(s1)
console.log(s1.Name)
console.log(s1.Age)
console.log(s1.Rollno)