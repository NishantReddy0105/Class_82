canvas = document.getElementById("myCanvas");
color = "blue";

ctx= canvas.getContext("2d");

var mouseEvent="";
var lastpositionofx,lastpositionofy;
Widthofline=2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.stokeStyle = color;
        ctx.LienWidth = Widthofline;

        console.log("Last position of x and y coordinates = ")
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.moveTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    lastpositionofx = current_position_of_mouse_x;
    lastpositionofy = current_position_of_mouse_y;

}
