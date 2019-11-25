//globals
var r1 = 0;
var rChange = r1;
var rChange2 = r1;
var rChange3 = r1;
var rChange4 = r1;

function setup() {
  // put setup code here
  createCanvas(510, 510);
  
}

function draw() {
  // put drawing code here
  background(223, 243, 245);
  push();
  	fill(185, 237, 215);
  	stroke(253, 255, 125);
  	ellipse(127.5, 127.5, rChange);
  	fill(255, 212, 255);
  	stroke(128, 170, 242);
  	ellipse(382.5, 127.5, rChange2);
  	fill(166, 245, 255);
  	stroke(76, 237, 146);
  	ellipse(382.5, 382.5, rChange3);
  	fill(247, 181, 151);
  	stroke(245, 71, 146);
  	ellipse(127.5, 382.5, rChange4);
  	if (rChange>200) {
  		rChange = r1;
  	} else{
  		rChange++;
  	}
  	if (frameCount<110) {

  	} else{
  		if (rChange2>200) {
  			rChange2 = r1;
  		} else{
  			rChange2++;
  		}
  	}
  	if (frameCount<50) {

  	} else{
  		if (rChange3>200) {
  			rChange3 = r1;
  		} else{
  			rChange3++;
  		}
  	}
  	if (frameCount<170) {

  	} else{
  		if (rChange4>200) {
  			rChange4 = r1;
  		} else{
  			rChange4++;
  		}
  	}
  pop();
  //trail
  push();
  	if (pmouseX<255) {
  		if (pmouseY<255) {
  			// -x, +y
  			fill(pmouseY, 230, pmouseX);
  			print(" -x, y");
  		} else{
  			// -x, -y
  			fill(510-pmouseY, 230, pmouseX);
  			print(" -x, -y");
  		}
  	} else{
  		if (pmouseY<255) {
  			// +x, +y
  			fill(pmouseY, 230, 510-pmouseX);
  			print(" x, y");
  		} else{
  			// +x, -y
  			fill(510-pmouseY, 230, 510-pmouseX);
  			print(" x, -y");
  		}
  	}
  	strokeWeight(5);
  	if (pmouseX<255) {
  		if (pmouseY<255) {
  			// -x, +y
  			stroke(230, pmouseX, pmouseY);	
  		} else{
  			// -x, -y
  			stroke(230, pmouseX, 510-pmouseY);
  		}
  	} else{
  		if (pmouseY<255) {
  			// +x, +y
  			stroke(230, 510-pmouseX, pmouseY);
  		} else{
  			// +x, -y
  			stroke(230, 510-pmouseX, 510-pmouseY);
  		}
  	}
  	var borderxt = map(pmouseX, 0, width, 50, 460, true);
	var borderyt = map(pmouseY, 0, height, 50, 460, true);
  	ellipse(borderxt, borderyt, 100, 100);
  pop();
  //controller bubble
  push();
  	if (mouseX<255) {
  		if (mouseY<255) {
  			// -x, +y
  			fill(mouseY, 230, mouseX);
  			print(" -x, y");
  		} else{
  			// -x, -y
  			fill(510-mouseY, 230, mouseX);
  			print(" -x, -y");
  		}
  	} else{
  		if (mouseY<255) {
  			// +x, +y
  			fill(mouseY, 230, 510-mouseX);
  			print(" x, y");
  		} else{
  			// +x, -y
  			fill(510-mouseY, 230, 510-mouseX);
  			print(" x, -y");
  		}
  	}
  	strokeWeight(5);
  	if (mouseX<255) {
  		if (mouseY<255) {
  			// -x, +y
  			stroke(230, pmouseX, pmouseY);	
  		} else{
  			// -x, -y
  			stroke(230, pmouseX, 510-pmouseY);
  		}
  	} else{
  		if (mouseY<255) {
  			// +x, +y
  			stroke(230, 510-pmouseX, pmouseY);
  		} else{
  			// +x, -y
  			stroke(230, 510-pmouseX, 510-pmouseY);
  		}
  	}
  	var borderx = constrain(mouseX, 50, 460);
	var bordery = constrain(mouseY, 50, 460);
  	ellipse(borderx, bordery, 100, 100);
  pop();
  print(dist(mouseX, mouseY, 255, 255));
}