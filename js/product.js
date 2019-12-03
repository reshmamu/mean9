var productlist=[]
function product(pid,price,name){
    
    this.Pid=pid
    this.Price=price
    this.Name=name

    this.incPrice=function(amount){
        this.Price=this.Price+amount
        console.log("price",this.Price)
    }    
}

    // // var p1=new product("1",500,"bag")
    // // p1.incPrice(100)

    // var p1=new product("1",500,"bag")
    // var p2=new product("1",500,"bag")
    // console.log(p1==p2)
    //  var s1="hello"
    //  var s2="hello"
    //  console.log(s1==s2)



    
    function product1(){

        var pid=document.getElementById('id').value
        var price=document.getElementById('price').value
        var name=document.getElementById('name').value

        var p=new product(pid,name,price)

        pstr=JSON.stringify(p)
        console.log("string objrct",pstr)
        data=JSON.parse(pstr)
        console.log(data["Name"])   //to get data
        console.log(data.Name)       // another method 

        //alert(p.Pid+" "+p.Price+" "+p.Name)
        
        productlist.push(p)
        console.log(productlist)   
        for(obj of productlist){   
            // console.log(obj.Pid)
            // console.log(obj.Price)
            // console.log(obj.Name)

            document.getElementById('list').innerHTML="pid="+obj.Pid+"\n"+"price="+obj.Price+"\n"+"Name="+obj.Name    //to print on html page
        }

        var newdiv=document.createElement('div')
        newdiv.innerHTML="new div"
        document.getElementById('div1').appendChild(newdiv)
       }
    