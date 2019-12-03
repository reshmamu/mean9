function load(){
    console.log("load function")
    document.getElementById('img1').style.display="none"
    document.getElementById('img2').style.display="block"
}

function reload(){
    console.log("Reload function")
    document.getElementById('img2').style.display="none"
    document.getElementById('img1').style.display="block"
}
function getState(){

    var state=document.getElementById("states").value
    document.getElementById('chosenstate').value=state
    alert("you have selected " +state)
}

function validate(){
    
    var name=document.getElementById('name')
  
    if(name.value==""){  <label for="">No1</label>
    <input type="text" id="number"><br><br></br>
       // console.log("  <label for="">No1</label>
    <input type="text" id="number"><br><br></br>
        alert("name fie  <label for="">No1</label>
    <input type="text" id="number"><br><br></br>
        name.focus()
        return false
    }


    if(age.value==""){
        alert("age field cant be empty..")
        age.focus()
        return false
    }

    if(password.value==""){
        alert("password field cant be empty..")
        password.focus()
        return false
    }
    if(password.value.length<4 || password.value.length>12){
        alert("password should be of min length 4 and max length is 12")
        password.focus()
        return false
    }


    if(number.value==""){
        alert("mob no field cant be empty..")
        number.focus()
        return false
    }
    data=confirm("Do you want to continue?")
    console.log(data)
    if(data==false){
        return false
    }

}