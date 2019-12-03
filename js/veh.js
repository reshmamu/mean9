function loadTime(){
    document.getElementById('time').value=new Date().toLocaleTimeString()
}

function vehicle(no,time,hours){
    this.vno=no
    this.entrytime=time
    this.hours=hours
}

var vehiclelist=[]
function save(){
    var no=document.getElementById('no').value
    var time=document.getElementById('time').value
    var hrs=document.getElementById('hour').value
    var vehicle=new vehicle(no,time,hours)
    if(vehiclelist)
    vehiclelist.push(vehicle)
}

function show(){
    document.getElementById('show').style.display="block"
}

function remove(){
    var vno=document.getElementById('no').value
    vehiclelist.forEach((obj)=>{
        if(obj.vno==vno){
            var index=vehiclelist.indexOf
        }
    })
}




    