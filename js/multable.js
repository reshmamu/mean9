function multi(){
    first=document.getElementById("first").value 
    second=document.getElementById("second").value 
    divs2=document.getElementById("divs2")
    var str='<table border="1">'
    var result

    for(var i=1;i<=second;i++){
    result=first*i
    str+='<tr> <td>'
    str+=first
    str+='</td><td>X</td><td>'
    str+=i 
    str+='</td><td>=</td><td>'
    str+=result
    str+='</td><tr>'
    }
str+='</table>'
divs2.innerHTML=str
}