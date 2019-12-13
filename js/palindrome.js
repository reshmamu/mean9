
function palin(){
    var str=document.getElementById("pal").value 
    pali=document.getElementById("pali")
    //console.log("string is",str)
    var len = str.length;
    //console.log("length:",len) 
   // console.log("mid:",mid) 

    for ( var i = 0; i < len/2; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
       
            pali.innerHTML="not palindrome"
            return false;  
            
        }
    }
    pali.innerHTML="palindrome"
    myVar=setTimeout(clearing,2800)
    

    
}
function clearing(){
    pali=document.getElementById("pali")
    pali.innerHTML=''
}
   



