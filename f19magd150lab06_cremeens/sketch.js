//Atari PONG in p5.js

//variables
var ballx, bally;
var ballwidth=10;
var ballheight=10;
var xspeed=5;
var yspeed=xspeed;
var paddle1speed=xspeed*2;
var paddle2speed=xspeed*2;
//left paddle
var paddle1x, paddle1y;
//right paddle
var paddle2x, paddle2y;
var paddlewidth=10;
var paddleheight=50;
var p1score=0;
var p2score=0;
var rebound;
var theta=0;

function setup() {
  createCanvas(800, 620);
  textSize(10);
  textAlign(CENTER, CENTER);
  fill(255);
  rectMode(CENTER);
  ballx=width/2;
  bally=height/2;
  paddle1x=width/6;
  paddle2x=width-(width/6);
  paddle1y=height/2;
  paddle2y=height/2;
}

function draw() {
  //background setup
  background(0, 0, 0, 150);
  //semi-transparent background creates a trail behind the ball and paddles,
  //giving them a greater sense of motion.
  push();
  stroke(255);
  strokeWeight(2);
  beginShape(LINES);
  	vertex(width/2, 0);
  	vertex(width/2, 20);
  	vertex(width/2, 40);
  	vertex(width/2, 60);
  	vertex(width/2, 80);
  	vertex(width/2, 100);
  	vertex(width/2, 120);
  	vertex(width/2, 140);
  	vertex(width/2, 160);
  	vertex(width/2, 180);
  	vertex(width/2, 200);
  	vertex(width/2, 220);
  	vertex(width/2, 240);
  	vertex(width/2, 260);
  	vertex(width/2, 280);
  	vertex(width/2, 300);
  	vertex(width/2, 320);
  	vertex(width/2, 340);
  	vertex(width/2, 360);
  	vertex(width/2, 380);
  	vertex(width/2, 400);
  	vertex(width/2, 420);
  	vertex(width/2, 440);
  	vertex(width/2, 460);
  	vertex(width/2, 480);
  	vertex(width/2, 500);
  	vertex(width/2, 520);
  	vertex(width/2, 540);
  	vertex(width/2, 560);
  	vertex(width/2, 580);
  	vertex(width/2, 600);
  	vertex(width/2, 620);
  	endShape();
  pop();
  
  //controls and play pieces
  p1control();
  p2control();
  ball(ballx, bally);
  paddle(paddle1x, paddle1y);
  paddle(paddle2x, paddle2y);
  rebound=random(-1,1);

  //ball motion
  ballx+=xspeed;
  bally+=yspeed;
  //collisions
  if(bally+5>height||bally-5<0){
  	yspeed*=-1;
    print("wall");
  } else if(ballx>paddle1x-paddlewidth&&ballx<paddle1x+paddlewidth&&bally>paddle1y-paddleheight&&bally<paddle1y+paddleheight){
    //when the ball hits player 1's paddle, it is repelled at a random velocity.
  	print("hit");
    xspeed*=-1;
    yspeed=rebound*5;
  } else if(ballx>paddle2x-paddlewidth&&ballx<paddle2x+paddlewidth&&bally>paddle2y-paddleheight&&bally<paddle2y+paddleheight){
    //when the ball hits player 2's paddle, it is repelled.
    print("hit");
    xspeed*=-1;
    yspeed=rebound*5;
  }

  //display player scores
  push();
  translate(width/4, 50);
  scale(10);
  text(p1score, 0, 0);
  pop();
  push();
  translate(width-(width/4), 50);
  scale(10);
  text(p2score, 0, 0);
  pop();

  //if the ball goes off screen, give a point to the other player and reset the ball
  if(ballx>width+100){
    p1score++;
    ballx=width/2;
    xspeed*=-1;
  } else if(ballx<-100){
    p2score++;
    ballx=width/2;
  }


  //if a player's score reaches 11, they win
  if(p1score>=11){
    background(0);
    push();
    translate(width/2, height/2);
    scale(10);
    rotate(theta);
    text("PLAYER 1 WINS", 0, 0);
  } else if(p2score>=11){
    background(0);
    push();
    translate(width/2, height/2);
    scale(10);
    rotate(theta);
    text("PLAYER 2 WINS", 0, 0);
  }
  theta+=0.05;
}

function ball(x, y){
	//creating the ball
	push();
	translate(x, y);
	rectMode(CENTER);
	noStroke();
	rect(0, 0, ballwidth, ballheight);
	pop();
}

function paddle(x, y){
	push();
	translate(x, y);
	rectMode(CENTER);
	noStroke();
	rect(0, 0, paddlewidth, paddleheight);
	pop();
}

//player controls
function p1control(){
  if(keyIsDown(87)&&paddle1y-25>0){
    paddle1y-=paddle1speed;
    print("up");
  } else if(keyIsDown(83)&&paddle1y+25<height){
    paddle1y+=paddle1speed;
    print("down");
  }
}

function p2control(){
  if(keyIsDown(73)&&paddle2y-25>0){
    paddle2y-=paddle2speed;
    print("up");
  } else if(keyIsDown(75)&&paddle2y+25<height){
    paddle2y+=paddle2speed;
    print("down");
  }
}