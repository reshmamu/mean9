/*var i=100;var j=200;var k=300
if(i>j && i>k){
    console.log(i,"is larger")
}else if(j>i && j>k){
    console.log(j,"is larger")
}else{
console.log(k,"is the largest number")
}


input="+"
switch(input){
            case "-":{
                s=50-40
                console.log(s)
                break
            }
            case "+":{
                a=50+40
                console.log(a)
                break
            }
            case "*":{
                x=50*40
                console.log(x)
                break
            }
            default:
                document.write("invalid operation")
            }*/


var i=100
console.log(typeof i)
var j=Number(100)
console.log(typeof j)
var str="hello"
var str1=String("hello")
console.log("str",typeof str)
console.log("str1",typeof str1)
const k=100

//k=200
//var z=100
//z='hello'
var strobj=new String("hello")
console.log(strobj,"\n",typeof strobj)
var ch=strobj.charAt(0)
console.log(ch)
var str="hello"
console.log(str.charAt(1))
var obj=new Number(123)
console.log(obj)
console.log(typeof obj)