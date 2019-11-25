//variables
var fuzz=[];
var avignon,cameoAppearance,underground;


function setup() {
  	createCanvas(400,400);
  	avignon=loadFont('AvignonNF.TTF');
  	cameoAppearance=loadFont('CameoAppearanceNF.TTF');
  	underground=loadFont('UndergroundNF.TTF')
}

function draw() {
	if(frameCount%4==0){
		/*the draw function is called every 4 frames
		to give the static bars a less strobe-like look.*/
		background(0);

		/*a semi-transparent background is layed over the rest
		of the scene to add a sepia tint to what is below*/
		//background(142,113,12,150);
	}
	//tv static
  	/*for (var i = 0; i<width; i++){
	  	fuzz[i]=random(240,150);
  	}
  	for (var i=0; i< fuzz.length; i++){
  		if(frameCount%4==0){
  			if(i%round(random(50,10))==0){
    			stroke(fuzz[i]);
    			line(i,0,i,height);
    		} else {
    			noStroke();
    		}
    	}
  	}*/
}