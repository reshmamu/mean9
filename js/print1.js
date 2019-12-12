function demo(){

    name=document.getElementById("name").value
    address=document.getElementById("address").value

    divs=document.getElementById("divs")
    str =' <table border="2"> <tr> <td>name</td><td>'
    str += name
    str += ' </td></tr>'
    str += ' <tr>  <td>address</td><td>'
    str += address
    str += ' </td></tr></table>'
    divs.innerHTML= str
}

function clear1(){
    divs1=document.getElementById("divs")
    divs1.innerHTML= ''
}

