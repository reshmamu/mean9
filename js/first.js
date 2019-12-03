var x=50
console.log(x)   /*to print the value of x*/
console.log(typeof x)   /*to print the type of x*/
var j=100.45
console.log(j)
console.log(typeof j)

var str="welcome" /*for string and characters, can use both '' and "" */
console.log(typeof str)
console.log("value of x=",x, "type :",typeof x)

var b=true
console.log(typeof b)
var b=false
x=100
console.log(x)  /*over write the value of x, now x is 100*/

document.write("x=",x,"<p>"+"welcome"+"</p>")  /*print the value in html page*/

var z
console.log(typeof z) /*uninitialized varibale*/

var obj=null
console.log(typeof obj) /*empty object*/

var k
var sum=k+x
console.log(sum)  /*output=NaN means not a number coz k is undefined */

//operators - for adding and concatinating
//arithmetic operators

var x=10+20;
console.log(x)
str1="hello"
str2="world"
str3=str1+str2
console.log(str3)

var a=10,b=20,c=30
var sub=b-a
console.log(sub)
var mul=a*b
console.log(mul)
var div=a/b
console.log(div)
var mod=b%a
console.log(mod)
var x=10**3
console.log(x)

x=10
x+=2
console.log(x)

//relational operators
var a=10,b=20,c=10
console.log(a<=b) // if condition is true then result will be true
console.log(a>=b)
console.log(a==b)

var s="10" ; var k=10
console.log(s==k) //it will check the value of s and k not its type
console.log(s===k) //here it will check the type
console.log(s!=k)

//logical operators

console.log(a<b && a==c) // if both side expression are true then the reslut will be true
console.log(a>b || a==c)
console.log(!(a>b))

//cinditional operators
console.log(a<b ? str="hello" : str="world")
//conditional stmnts
var x=100,y=90.50,z="hi"
if(typeof x=="number"){

    x+=20
    console.log(x)

}else if(typeof z=="string"){
    str=z+"hello"
    console.log(str)

} else{

    console.log(z)
}


