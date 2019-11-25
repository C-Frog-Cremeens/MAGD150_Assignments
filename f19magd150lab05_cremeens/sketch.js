//variables
var powerx = 100;
var powery = 400;
var powerwidth = 50;
var powerheight = 50;
var dialx = 700;
var dialy = 400;
var dialwidth = 100;
var dialheight = 100;
var power = false;
var channel = true;
var x, y;
var xspeed; 
var yspeed; 

function setup() {
  // put setup code here
  createCanvas(800, 500);
  x = width/2;
  y = height/2;
  xspeed = random(7);
  yspeed= random(7);
}

function draw() {
  // put drawing code here
  background(92, 35, 2);
  var screenx = width/2;
  var screeny = height/2;
  var screenwidth = width/1.75;
  var screenheight = height/1.7;
  var barheight = screenheight*(2/3);
  var barwidth = screenwidth/7;

  //screen
  push();
  strokeWeight(2);
  stroke(200, 180, 70);
  fill(30);
  rectMode(CENTER);
  rect(screenx, screeny, screenwidth, screenheight);
  pop();

  //power button (rect)
  push();
  stroke(70);
  fill(50);
  rectMode(CENTER);
  rect(powerx, powery, powerwidth, powerheight);
  pop();

  //channel dial (circle)
  push();
  stroke(70);
  fill(50);
  ellipseMode(CENTER);
  ellipse(dialx, dialy, dialwidth, dialheight)
  pop();

  //screen state
  if (power==true&&channel==true) {
  	//channel 1 (colorbars)
  	rectMode(CENTER);
  	noStroke();
  	//top 2/3, 7 vert bars 75% intensity--white, yellow, cyan, green, magenta, red, blue
  	fill(255,255,255,191);
  	rect(screenx-(screenwidth/2)+(barwidth*0.5), screeny-(screenheight/6), barwidth, barheight);
  	fill(255,255,0,191);
  	rect(screenx-(screenwidth/2)+(barwidth*1.5), screeny-(screenheight/6), barwidth, barheight);
  	fill(0,255,255,191);
  	rect(screenx-(screenwidth/2)+(barwidth*2.5), screeny-(screenheight/6), barwidth, barheight);
  	fill(0,255,0,191);
  	rect(screenx, screeny-(screenheight/6), barwidth, barheight);
  	fill(255,0,255,191);
  	rect(screenx+(screenwidth/2)-(barwidth*2.5), screeny-(screenheight/6), barwidth, barheight);
  	fill(255,0,0,191);
  	rect(screenx+(screenwidth/2)-(barwidth*1.5), screeny-(screenheight/6), barwidth, barheight);
  	fill(0,0,255,191);
  	rect(screenx+(screenwidth/2)-(barwidth*0.5), screeny-(screenheight/6), barwidth, barheight);
  	//below, blue, magenta, cyan, white castellations.
  	rect(screenx-(screenwidth/2)+(barwidth*0.5), screeny+(barheight/3), barwidth, 33);
  	fill(255,0,255,191);
  	rect(screenx-(screenwidth/2)+(barwidth*2.5), screeny+(barheight/3), barwidth, 33);
  	fill(0,255,255,191);
  	rect(screenx+(screenwidth/2)-(barwidth*2.5), screeny+(barheight/3), barwidth, 33);
  	fill(255,255,255,191);
  	rect(screenx+(screenwidth/2)-(barwidth*0.5), screeny+(barheight/3), barwidth, 33);
  	//bottom, white square, black rectangle
  	fill(255);
  	rect(screenx-(screenwidth/4), screeny+(screenheight/2)-((screenheight-barheight-33)/2), screenwidth/6, screenheight-barheight-33);
  	fill(0,30,30,100);
  	rect(screenx-(screenwidth/4)-(screenwidth/6), screeny+(screenheight/2)-((screenheight-barheight-33)/2), screenwidth/6, screenheight-barheight-33);
  	fill(30,0,30,100);
  	rect(screenx-(screenwidth/4)+(screenwidth/6), screeny+(screenheight/2)-((screenheight-barheight-33)/2), screenwidth/6, screenheight-barheight-33);
  	fill(30);
  	rect(screenx+(screenwidth/4), screeny+(screenheight/2)-((screenheight-barheight-33)/2), screenwidth/2, screenheight-barheight-33);
  } else if(power==true&&channel==false){
	//channel 2 (bouncing ball)
	noStroke();
	fill(180, 50, 180);
	ellipse(x, y, 50, 50);
	x+=xspeed;
	y+=yspeed;
	if(x-25<=(screenx-(screenwidth/2))||x+25>=(screenx+(screenwidth/2))){
		xspeed*=-1;
	} else if(y-25<=(screeny-(screenheight/2))||y+25>=(screeny+(screenheight/2))){
		yspeed*=-1;
	}
  } else if(power==false){

  }

  //button reaction
  if(true){

  }

  //button presses
  if (mouseIsPressed) {
  	if (mouseX>(powerx-(powerwidth/2))&&mouseX<(powerx+(powerwidth/2))&&mouseY>(powery-(powerheight/2))&&mouseY<(powery+(powerheight/2))) {
  		print("mouse clicked on power button");
  		power=!power;

  	} else if(mouseX>(dialx-(dialwidth/2))&&mouseX<(dialx+(dialwidth/2))&&mouseY>(dialy-(dialheight/2))&&mouseY<(dialy+(dialheight/2))) {
  		print("mouse clicked on dial");
  		channel=!channel;
  	}
  }
}