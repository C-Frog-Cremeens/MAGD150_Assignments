//TRIGGER WARNING: FLASHING LIGHTS

let noise;
let spook = false;
let r;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  comePlay = loadSound('Come Play with Me.mp3');
  mirror = loadImage('halloween-1756864_1280.jpg');
  face = loadImage('download.jpg');
}

function setup() {
  createCanvas(300, 300);
  noise = new p5.Noise();
  noise.setType('white');
  noise.amp(0);
  noise.start();
  comePlay.setVolume(0.5);
}

function draw() {
  comePlay.playMode('untilDone');
  //the song loops once it's done playing
  comePlay.play();
  //the basic concept here is to make a spooky face jump out of the mirror, accompanied by random static, randomly every few seconds.
  r = round(random(0, 100));
  if (r > 97) { //there is a 3% chance of spookage
    spook = true;
  }
  if (spook == true) {
    noise.amp(0.08, 0.1);
    tint(220, 0, 0);
    image(face, 0, 0, 300, 300);
    filter(POSTERIZE, 5);
    noise.amp(0, 0.1); //the white noise fades in and immediately fades out
    spook = false;
  } else {
    image(mirror, 0, 0, 300, 300);
    tint(255);
  }
}