obj={}
console.log(obj)
person={
    "name":"ann",
    "age":12,
    "address":"hnjk"
}
console.log(person)
person.mobileno=4852369712
console.log(person)

//or
 person["mobileno"]=7458963256
 console.log(person)

 person.update=function(name){
   person.name=name
 }
 console.log(person)
 person.update("Anna")
 console.log(person)
 
 student=function(rollno,name,batch){
     this.rollno=rollno
     this.name=name
     this.batch=batch
     this.dispaly=function(){
         console.log("ROLLNO:",this.rollno)
         console.log("NAME:",this.name)
         console.log("BATCH:",this.batch)
     }
 }
 student1=new student(1,"Amy","CSE")
 student1.dispaly()

 localStorage.setItem("student1",JSON.stringify(student1))
 studentstr=localStorage.getItem("student1")
 studentobj=JSON.parse(studentstr)
 console.log(studentobj.rollno)
 console.log(studentobj["name"])


 person={
    "name":"ammu",
    "age":15,
    "address":"mmmm"
}

//  obj=Object.create(null)
//  console.log(obj)
//  student=Object.create(person) //inherited properties
//  student.rollno=1
//  console.log(student)
//  console.log(student.hasOwnProperty('name'))
//  console.log(student.hasOwnProperty('rollno'))

//  //person.age=13
//  //student.age=15
//  //console.log(student)

//  student.__proto__.age=15// it will access proto property
//  console.log(student)

//  data=Object.freeze(person)
//  data.__proto__.name="Rose"
//  data.number=7852369412
//  console.log(data)
//  console.log(Object.isFrozen(data))  //to check whether the object  is freeze or not
//  console.log(Object.isFrozen(person))

//  const s=100 //declaring const variable
//  s=200
//  console.log(s)
Object.seal(person)    //the freeze function should be commented before the seal
person.name="athira"
person.number=5236987412
console.log(person)
console.log(Object.isSealed(person))

student={"rollno":1}
Object.assign(student,person)
console.log(student)

for(i of Object.keys(person)){
    console.log(i)
}
//or
var data=Object.create(person)
data.houseno=10
data.area="eklm"
Object.keys(data).forEach(element => {
    console.log("--",element)
})