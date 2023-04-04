window.onload = function(){
    var click = 0;
    document.getElementById("leaf").onclick = function(){
        click = click + 1;
        console.log("leafy" + click);
        document.getElementById("amount-of-leafs").innerHTML = click;
        var small_leaf = document.createElement("div");
        small_leaf.className = "small-leaf"; 
        document.body.appendChild(small_leaf);
        var random_number = Math.floor(Math.random() * 100 + 1) //math.floor makes it even
        small_leaf.style.left = random_number + "vw"; 
        setTimeout(() => {
            small_leaf.remove();
        }, 1500 );
    }
}