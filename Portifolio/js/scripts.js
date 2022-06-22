function openNav() {

    let x = document.getElementById("navigation");

    if (x.className === "navigation"){
        x.className += " menu-js";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    }
    else{
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }

}