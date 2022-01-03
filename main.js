var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="";
var radius="";
var line_width="";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    line_width=document.getElementById("line_width").value;

    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
        current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
        current_position_of_mouse_y=e.clientY-canvas.offsetTop;

        if (mouse_event=="mousedown"){
            
            console.log("The current position of x and y coordinates: ");
            console.log("x=",+current_position_of_mouse_x);
            console.log("y=", +current_position_of_mouse_y);

            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=line_width;
            ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
    
            ctx.stroke();
           
    }
    
}