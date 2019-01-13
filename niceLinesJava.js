//David Williams November 2018

var x1,y1,x2,y2,wobble,move,you,me;
//p5 dom object
var canvas;

function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  //set canvas behing text
  canvas.style('z-index', '-1');

  background(255);
  

  //some wonderfully meaningful variable names
  move = 5;
  x = 0;
  y = 0;
  me =0;
  you =0;
  

}
function windowResized(){
  //for ease of use with mobile
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  //sin frequency vals
  me += 0.001;
  you += 0.01;
  
  x += move;
  
  var c = sin(you);
  var cMap = map(c, -1, 1, 100, 255);
  
  //excessive use of trigonometry functions, but makes for a pleasing animation!
  x1 = noise(sin(cos(x))) + (noise(-me, me, tan(sin(me)))*width);
  y1 = noise(sin(y)) + (noise(-me,me,cos(-me))*height);
  
  stroke(255, cMap, -cMap, 50);
  
  fill(255, cMap, -cMap, 50);
  
  
  rectMode(CENTER);
  strokeWeight(2);
 point(x1 + 200,y1 + 20, -100);
 line(x1,y1,x1/2,y1/2,x1,-x1);
 ellipse(y1/2,x1/2,10,10);
  
  
  if(x >= width){
   x = 0;
   y += 400;
   
  }
  if( y > height){
    
    y = 0;
  }
  
}
