function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(10);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  translate(width/2,height/2);
  
  //fig.centrale
  push();
  rotate(frameCount);
  stroke(lerpColor(color('#000000'), color('#ffffff'), frameCount/180));
  noFill();
  
  line(0,0,sin(frameCount)*width/4,0);
  line(0,0,-(width/4*sin(frameCount)),0);
  line(0,0,0,sin(frameCount)*width/4);
  line(0,0,0,-(width/4*sin(frameCount)));
  
  rect(0, 0, sin(frameCount)*width/4+width/8,sin(frameCount)*width/4);
  rect(0, 0, sin(frameCount)*width/4, sin(frameCount)*width/4+width/8);
  pop();
  

  //fig.basso-dx
  push();
  translate(150,150);
  stroke(lerpColor(color('#6919a0'), color('#ffa8ff'), frameCount/180));
  line(width/10,0,width/10*cos(frameCount*2),height/10*sin(frameCount*2));
  pop();
  
  
 //fig.alto-sx
 push();
  translate(-150,-150);
  rotate(frameCount);
  stroke(lerpColor(color('#2aa4ff'), color('#0019a0'), frameCount/180));
  
  line(0,0,sin(frameCount)*width/10,0);
  line(0,0,-(width/10*sin(frameCount)),0);
  line(0,0,0,sin(frameCount)*width/10);
  line(0,0,0,-(width/10*sin(frameCount)));
  
  stroke(lerpColor(color('#2affff'), color('#2aa4ff'), frameCount/180));
  line(0,0,sin(frameCount*4)*width/10,0);
  line(0,0,-(width/10*sin(frameCount*4)),0);
  pop();
  
  //fig.basso-sx
  push();
  stroke(lerpColor(color('#ff0000'), color('#f9dc33'), frameCount/180));
  translate(-150,150);
  rotate(frameCount*4);
  line(width/10,0,width/10*cos(frameCount*10),height/10*sin(frameCount*10));
  pop();

  //fig.alto-dx
  push();
  stroke(lerpColor(color('#295200'), color('#77d215'), frameCount/180));
  translate(150,-150);
  rotate(frameCount*2);
  line(width/10,0,width/16*cos(frameCount*32),height/16*sin(frameCount*32));
  pop();
  
  if(frameCount ==180) {
    noLoop();
  }
}