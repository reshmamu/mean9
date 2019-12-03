var todolist=[]
var tomlist=[]
    function addtodo(){
        var value=document.getElementById('txt').value
        todolist.push(value) 
        console.log(todolist)
        document.getElementById('txt').value=""
        var tododiv=document.createElement("div")

        for(i in todolist){
            tododiv.innerHTML=todolist[i]+"<br><button onclick='remove("+i+")'>"+"remove"+"</button>"
        }
        document.getElementById("mylist").appendChild(tododiv)
    } 
    
    
    function remove(m){

        tomlist.push(todolist[m])
        todolist.splice(m,1)
        console.log(" Elements of Todolist:",todolist)
        console.log("Elements of Tomlist:",tomlist)
        
        var tom=document.getElementById("list")
        mylist1.innerHTML=tomlist
        tom.appendChild(mylist1) 

    }
   