var x = 0,y = 0;
var vx = 1,vy = 1;
function change()
{
	var ball = document.getElementById("ball");
	if(x <= 0){
		vx = 1;
	}
	else if(ball.width + x >= document.documentElement.clientWidth){
		vx = -1;
	}
	x+=vx;
	if(y <= 0){
		vy = 1;
	}
	else if(ball.height + y >= document.documentElement.clientHeight){
		vy = -1;
	}
	y+=vy;
	ball.style.left = x + "px";
	ball.style.top = y + "px";
}
window.onload = function()
{
	setInterval("change()",1);
}