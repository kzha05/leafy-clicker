window.onload = function(){
    var click = 0;
    var leaf_boost = false;
    var leaf_boost_countdown = 0;

    function small_leaf_animation(){
        var small_leaf = document.createElement("div");
        small_leaf.className = "small-leaf"; 
        document.body.appendChild(small_leaf);
        var random_number = Math.floor(Math.random() * 100 + 1) //math.floor makes it even
        var random_number2 = Math.floor(Math.random() * 359 + 1) //math.floor makes it even
        small_leaf.style.rotate = random_number2 + "deg"; 
        small_leaf.style.left = random_number + "vw"; 
        setTimeout(() => {
            small_leaf.remove();
        }, 1500 );
    }

    function add_leaf(){
        click = click + 1;
        document.getElementById("amount-of-leaves").innerHTML = click + " leaves";
    }

    function big_leaf_animation(){
        document.getElementById("leaf").className = "bigleaf-animation";
        setTimeout(() => {
            document.getElementById("leaf").className = "";
        }, 350 );
    }

    document.getElementById("leaf").onclick = function(){
       add_leaf();
       small_leaf_animation();
       big_leaf_animation();
    }

    setInterval(() => {
        leaf_boost_countdown += 1; 
    }, 1000);
}