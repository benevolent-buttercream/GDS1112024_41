var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60;
var timer = setInterval(game, fps);

var x = 50;
var y = canvas.height/2;
var w = 50;
var h = 50;
var moveAmountX = 10;
var moveAmountY = 10;

function game(){
    //Clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)

    //Update the canvas
    x += moveAmountX;
    y += moveAmountY
    
    //Draw our GameObjects
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(x, y, w, 0, 2*Math.PI, true);
    ctx.closePath;
    ctx.fill();

    if(x > canvas.width - w){
        //make square come out other side of canvas
        moveAmountX *= -1;
    }

    if(x < 50){
        moveAmountX *= -1;
    }

    if(y < 50){
        moveAmountY *= -1;
    }

    if(y  > canvas.height - h){
        moveAmountY *= -1;
    }
}