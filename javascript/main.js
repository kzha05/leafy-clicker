window.onload=function(){
    var click=0;
    document.getElementById("leaf").onclick=function(){
        click=click + 1;
        console.log("leafy" + click);
        document.getElementById("amount-of-leafs").innerHTML=click;
    }
}