var slider = document.getElementById("pop");
var output = document.getElementById("popNo");
var speed = document.getElementById("speed");
var speedoutput = document.getElementById("speedNo");
var canvas = document.getElementById("canvas");
var gno = document.getElementById("genNo");
var context = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-220;
start = false

document.getElementById('start').onclick= ()=>{
    if(!start){
        start = true;
        update()
        a = document.getElementById('start');
        a.style.background = "rgb(235 27 85)";
        a.style.pointerEvents = "none";
        slider.disabled = true;
        speed.disabled = true;
    }
}

// font end
document.getElementById('start').onmousedown = (event) =>{
    (!start) ? event.target.style.background = "rgba(5, 94, 143, 0.7)":undefined
}
document.getElementById('start').onmouseup = (event) =>{
    (!start) ? event.target.style.background = "#015b82":undefined;
}
document.getElementById('start').onmouseleave = (event) =>{
    (!start) ? event.target.style.background = "#1BADEB":undefined;
}
document.getElementById('start').onmouseenter = (event) =>{
    (!start) ? event.target.style.background = "#015b82":undefined;
}

speedoutput.innerHTML = speed.value;
output.innerHTML = slider.value;